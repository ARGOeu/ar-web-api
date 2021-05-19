/*
 * Copyright (c) 2015 GRNET S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS
 * IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * The views and conclusions contained in the software and
 * documentation are those of the authors and should not be
 * interpreted as representing official policies, either expressed
 * or implied, of GRNET S.A.
 *
 */

package trends

import (
	"io/ioutil"
	"log"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/ARGOeu/argo-web-api/respond"
	"github.com/ARGOeu/argo-web-api/utils/authentication"
	"github.com/ARGOeu/argo-web-api/utils/config"
	"github.com/ARGOeu/argo-web-api/utils/mongo"
	"github.com/gorilla/mux"
	"github.com/stretchr/testify/suite"
	"gopkg.in/gcfg.v1"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

// This is a util. suite struct used in tests (see pkg "testify")
type TrendsTestSuite struct {
	suite.Suite
	cfg          config.Config
	router       *mux.Router
	confHandler  respond.ConfHandler
	tenantDbConf config.MongoConfig
}

// Setup the Test Environment
// This function runs before any test and setups the environment
// A test configuration object is instantiated using a reference
// to testdb: argo_test_details. Also here is are instantiated some expected
// xml response validation messages (authorization,crud responses).
// Also the testdb is seeded with tenants,reports,metric_profiles and status_metrics
func (suite *TrendsTestSuite) SetupTest() {

	log.SetOutput(ioutil.Discard)

	const testConfig = `
    [server]
    bindip = ""
    port = 8080
    maxprocs = 4
    cache = false
    lrucache = 700000000
    gzip = true
    [mongodb]
    host = "127.0.0.1"
    port = 27017
    db = "argotest_trends"
`

	_ = gcfg.ReadStringInto(&suite.cfg, testConfig)

	// Create router and confhandler for test
	suite.confHandler = respond.ConfHandler{suite.cfg}
	suite.router = mux.NewRouter().StrictSlash(true).PathPrefix("/api/v2/trends").Subrouter()
	HandleSubrouter(suite.router, &suite.confHandler)

	// Connect to mongo testdb
	session, _ := mongo.OpenSession(suite.cfg.MongoDB)

	// Add authentication token to mongo testdb
	seedAuth := bson.M{"api_key": "S3CR3T"}
	_ = mongo.Insert(session, suite.cfg.MongoDB.Db, "authentication", seedAuth)

	// seed mongo
	session, err := mgo.Dial(suite.cfg.MongoDB.Host)
	if err != nil {
		panic(err)
	}
	defer session.Close()

	// seed a tenant to use
	c := session.DB(suite.cfg.MongoDB.Db).C("tenants")
	c.Insert(bson.M{
		"id": "6ac7d684-1f8e-4a02-a502-720e8f11e50c",
		"info": bson.M{
			"name":    "GUARDIANS",
			"email":   "email@something2",
			"website": "www.gotg.com",
			"created": "2015-10-20 02:08:04",
			"updated": "2015-10-20 02:08:04"},
		"db_conf": []bson.M{
			bson.M{
				"store":    "main",
				"server":   "localhost",
				"port":     27017,
				"database": "argotest_trends_tenant",
				"username": "",
				"password": ""},
		},
		"users": []bson.M{
			bson.M{
				"name":    "tenant_user",
				"email":   "tenant_user@email.com",
				"roles":   []string{"viewer"},
				"api_key": "KEY1"},
		}})

	c = session.DB(suite.cfg.MongoDB.Db).C("roles")
	c.Insert(
		bson.M{
			"resource": "trends.flapping_metrics",
			"roles":    []string{"editor", "viewer"},
		},
		bson.M{
			"resource": "trends.flapping_endpoints",
			"roles":    []string{"editor", "viewer"},
		},
		bson.M{
			"resource": "trends.flapping_services",
			"roles":    []string{"editor", "viewer"},
		},
		bson.M{
			"resource": "trends.flapping_endpoint_groups",
			"roles":    []string{"editor", "viewer"},
		})

	// get dbconfiguration based on the tenant
	// Prepare the request object
	request, _ := http.NewRequest("GET", "", strings.NewReader(""))
	// add the content-type header to application/json
	request.Header.Set("Content-Type", "application/json")
	// add the authentication token which is seeded in testdb
	request.Header.Set("x-api-key", "KEY1")
	// authenticate user's api key and find corresponding tenant
	suite.tenantDbConf, _, err = authentication.AuthenticateTenant(request.Header, suite.cfg)

	// Now seed the report DEFINITIONS
	c = session.DB(suite.tenantDbConf.Db).C("reports")
	c.Insert(bson.M{
		"id": "eba61a9e-22e9-4521-9e47-ecaa4a494364",
		"info": bson.M{
			"name":        "Report_A",
			"description": "report aaaaa",
			"created":     "2015-9-10 13:43:00",
			"updated":     "2015-10-11 13:43:00",
		},
		"topology_schema": bson.M{
			"group": bson.M{
				"type": "NGI",
				"group": bson.M{
					"type": "SITES",
				},
			},
		},
		"profiles": []bson.M{
			bson.M{
				"id":   "6ac7d684-1f8e-4a02-a502-720e8f11e50b",
				"type": "metric",
				"name": "profile1"},
			bson.M{
				"id":   "6ac7d684-1f8e-4a02-a502-720e8f11e523",
				"type": "operations",
				"name": "profile2"},
			bson.M{
				"id":   "6ac7d684-1f8e-4a02-a502-720e8f11e50q",
				"type": "aggregation",
				"name": "profile3"},
		},
		"filter_tags": []bson.M{
			bson.M{
				"name":  "name1",
				"value": "value1"},
			bson.M{
				"name":  "name2",
				"value": "value2"},
		}})
	// seed the status detailed trends metric data
	c = session.DB(suite.tenantDbConf.Db).C("flipflop_trends_metrics")
	c.Insert(bson.M{
		"report":   "eba61a9e-22e9-4521-9e47-ecaa4a494364",
		"date":     "2015-05-01",
		"group":    "SITE-A",
		"service":  "service-A",
		"endpoint": "hosta.example.foo",
		"metric":   "check-1",
		"flipflop": 55,
	})
	c.Insert(bson.M{
		"report":   "eba61a9e-22e9-4521-9e47-ecaa4a494364",
		"date":     "2015-05-01",
		"group":    "SITE-A",
		"service":  "service-A",
		"endpoint": "hosta.example.foo",
		"metric":   "check-2",
		"flipflop": 40,
	})
	c.Insert(bson.M{
		"report":   "eba61a9e-22e9-4521-9e47-ecaa4a494364",
		"date":     "2015-05-01",
		"group":    "SITE-A",
		"service":  "service-B",
		"endpoint": "hostb.example.foo",
		"metric":   "web-check",
		"flipflop": 12,
	})
	c.Insert(bson.M{
		"report":   "eba61a9e-22e9-4521-9e47-ecaa4a494364",
		"date":     "2015-05-01",
		"group":    "SITE-B",
		"service":  "service-A",
		"endpoint": "hosta.example2.foo",
		"metric":   "web-check",
		"flipflop": 5,
	})

	// seed the status detailed trends endpoint data
	c = session.DB(suite.tenantDbConf.Db).C("flipflop_trends_endpoints")
	c.Insert(bson.M{
		"report":   "eba61a9e-22e9-4521-9e47-ecaa4a494364",
		"date":     "2015-05-01",
		"group":    "SITE-A",
		"service":  "service-A",
		"endpoint": "hosta.example.foo",
		"flipflop": 55,
	})
	c.Insert(bson.M{
		"report":   "eba61a9e-22e9-4521-9e47-ecaa4a494364",
		"date":     "2015-05-01",
		"group":    "SITE-A",
		"service":  "service-B",
		"endpoint": "hostb.example.foo",
		"flipflop": 12,
	})
	c.Insert(bson.M{
		"report":   "eba61a9e-22e9-4521-9e47-ecaa4a494364",
		"date":     "2015-05-01",
		"group":    "SITE-B",
		"service":  "service-A",
		"endpoint": "hosta.example2.foo",
		"flipflop": 5,
	})

	// seed the status detailed trends service data
	c = session.DB(suite.tenantDbConf.Db).C("flipflop_trends_services")
	c.Insert(bson.M{
		"report":   "eba61a9e-22e9-4521-9e47-ecaa4a494364",
		"date":     "2015-05-01",
		"group":    "SITE-A",
		"service":  "service-A",
		"flipflop": 55,
	})
	c.Insert(bson.M{
		"report":   "eba61a9e-22e9-4521-9e47-ecaa4a494364",
		"date":     "2015-05-01",
		"group":    "SITE-A",
		"service":  "service-B",
		"flipflop": 12,
	})
	c.Insert(bson.M{
		"report":   "eba61a9e-22e9-4521-9e47-ecaa4a494364",
		"date":     "2015-05-01",
		"group":    "SITE-B",
		"service":  "service-A",
		"flipflop": 5,
	})

	// seed the status detailed trends group data
	c = session.DB(suite.tenantDbConf.Db).C("flipflop_trends_endpoint_groups")
	c.Insert(bson.M{
		"report":   "eba61a9e-22e9-4521-9e47-ecaa4a494364",
		"date":     "2015-05-01",
		"group":    "SITE-A",
		"flipflop": 55,
	})
	c.Insert(bson.M{
		"report":   "eba61a9e-22e9-4521-9e47-ecaa4a494364",
		"date":     "2015-05-01",
		"group":    "SITE-B",
		"flipflop": 5,
	})

}

func (suite *TrendsTestSuite) TestTrends() {

	type expReq struct {
		method string
		url    string
		code   int
		result string
		key    string
	}

	expReqs := []expReq{

		expReq{
			method: "GET",
			url:    "/api/v2/trends/Report_A/flapping/metrics?date=2015-05-01",
			code:   200,
			key:    "KEY1",
			result: `{
 "status": {
  "message": "Success",
  "code": "200"
 },
 "data": [
  {
   "endpoint_group": "SITE-A",
   "service": "service-A",
   "endpoint": "hosta.example.foo",
   "metric": "check-1",
   "flapping": 55
  },
  {
   "endpoint_group": "SITE-A",
   "service": "service-A",
   "endpoint": "hosta.example.foo",
   "metric": "check-2",
   "flapping": 40
  },
  {
   "endpoint_group": "SITE-A",
   "service": "service-B",
   "endpoint": "hostb.example.foo",
   "metric": "web-check",
   "flapping": 12
  },
  {
   "endpoint_group": "SITE-B",
   "service": "service-A",
   "endpoint": "hosta.example2.foo",
   "metric": "web-check",
   "flapping": 5
  }
 ]
}`,
		},

		expReq{
			method: "GET",
			url:    "/api/v2/trends/Report_A/flapping/endpoints?date=2015-05-01",
			code:   200,
			key:    "KEY1",
			result: `{
 "status": {
  "message": "Success",
  "code": "200"
 },
 "data": [
  {
   "endpoint_group": "SITE-A",
   "service": "service-A",
   "endpoint": "hosta.example.foo",
   "flapping": 55
  },
  {
   "endpoint_group": "SITE-A",
   "service": "service-B",
   "endpoint": "hostb.example.foo",
   "flapping": 12
  },
  {
   "endpoint_group": "SITE-B",
   "service": "service-A",
   "endpoint": "hosta.example2.foo",
   "flapping": 5
  }
 ]
}`,
		},

		expReq{
			method: "GET",
			url:    "/api/v2/trends/Report_A/flapping/services?date=2015-05-01",
			code:   200,
			key:    "KEY1",
			result: `{
 "status": {
  "message": "Success",
  "code": "200"
 },
 "data": [
  {
   "endpoint_group": "SITE-A",
   "service": "service-A",
   "flapping": 55
  },
  {
   "endpoint_group": "SITE-A",
   "service": "service-B",
   "flapping": 12
  },
  {
   "endpoint_group": "SITE-B",
   "service": "service-A",
   "flapping": 5
  }
 ]
}`,
		},

		expReq{
			method: "GET",
			url:    "/api/v2/trends/Report_A/flapping/groups?date=2015-05-01",
			code:   200,
			key:    "KEY1",
			result: `{
 "status": {
  "message": "Success",
  "code": "200"
 },
 "data": [
  {
   "endpoint_group": "SITE-A",
   "flapping": 55
  },
  {
   "endpoint_group": "SITE-B",
   "flapping": 5
  }
 ]
}`,
		},
	}

	for _, expReq := range expReqs {
		request, _ := http.NewRequest(expReq.method, expReq.url, strings.NewReader(""))
		request.Header.Set("x-api-key", expReq.key)
		request.Header.Set("Accept", "application/json")

		response := httptest.NewRecorder()

		suite.router.ServeHTTP(response, request)

		suite.Equal(expReq.code, response.Code, "Incorrect HTTP response code")
		// Compare the expected and actual xml response
		suite.Equal(expReq.result, response.Body.String(), "Response body mismatch")

	}

}

func (suite *TrendsTestSuite) TestOptionsTrendsMetrics() {
	request, _ := http.NewRequest("OPTIONS", "/api/v2/trends/Report_A/flapping/metrics", strings.NewReader(""))

	response := httptest.NewRecorder()

	suite.router.ServeHTTP(response, request)

	code := response.Code
	output := response.Body.String()
	headers := response.HeaderMap

	suite.Equal(200, code, "Error in response code")
	suite.Equal("", output, "Expected empty response body")
	suite.Equal("GET, OPTIONS", headers.Get("Allow"), "Error in Allow header response (supported resource verbs of resource)")
	suite.Equal("text/plain; charset=utf-8", headers.Get("Content-Type"), "Error in Content-Type header response")

}

func (suite *TrendsTestSuite) TestOptionsTrendsEndpoints() {
	request, _ := http.NewRequest("OPTIONS", "/api/v2/trends/Report_A/flapping/endpoints", strings.NewReader(""))

	response := httptest.NewRecorder()

	suite.router.ServeHTTP(response, request)

	code := response.Code
	output := response.Body.String()
	headers := response.HeaderMap

	suite.Equal(200, code, "Error in response code")
	suite.Equal("", output, "Expected empty response body")
	suite.Equal("GET, OPTIONS", headers.Get("Allow"), "Error in Allow header response (supported resource verbs of resource)")
	suite.Equal("text/plain; charset=utf-8", headers.Get("Content-Type"), "Error in Content-Type header response")

}

func (suite *TrendsTestSuite) TestOptionsTrendsServices() {
	request, _ := http.NewRequest("OPTIONS", "/api/v2/trends/Report_A/flapping/services", strings.NewReader(""))

	response := httptest.NewRecorder()

	suite.router.ServeHTTP(response, request)

	code := response.Code
	output := response.Body.String()
	headers := response.HeaderMap

	suite.Equal(200, code, "Error in response code")
	suite.Equal("", output, "Expected empty response body")
	suite.Equal("GET, OPTIONS", headers.Get("Allow"), "Error in Allow header response (supported resource verbs of resource)")
	suite.Equal("text/plain; charset=utf-8", headers.Get("Content-Type"), "Error in Content-Type header response")

}

func (suite *TrendsTestSuite) TestOptionsTrendsEndpointGroups() {
	request, _ := http.NewRequest("OPTIONS", "/api/v2/trends/Report_A/flapping/groups", strings.NewReader(""))

	response := httptest.NewRecorder()

	suite.router.ServeHTTP(response, request)

	code := response.Code
	output := response.Body.String()
	headers := response.HeaderMap

	suite.Equal(200, code, "Error in response code")
	suite.Equal("", output, "Expected empty response body")
	suite.Equal("GET, OPTIONS", headers.Get("Allow"), "Error in Allow header response (supported resource verbs of resource)")
	suite.Equal("text/plain; charset=utf-8", headers.Get("Content-Type"), "Error in Content-Type header response")

}

// This function is actually called in the end of all tests
// and clears the test environment.
// Mainly it's purpose is to drop the testdb
func (suite *TrendsTestSuite) TearDownTest() {

	session, _ := mongo.OpenSession(suite.cfg.MongoDB)

	session.DB("argotest_trends").DropDatabase()
	session.DB("argotest_trends_tenant").DropDatabase()
}

// This is the first function called when go test is issued
func TestTrends(t *testing.T) {
	suite.Run(t, new(TrendsTestSuite))
}