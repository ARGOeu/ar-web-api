/*
 * Copyright (c) 2014 GRNET S.A., SRCE, IN2P3 CNRS Computing Centre
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
 * or implied, of either GRNET S.A., SRCE or IN2P3 CNRS Computing
 * Centre
 *
 * The work represented by this source file is partially funded by
 * the EGI-InSPIRE project through the European Commission's 7th
 * Framework Programme (contract # INFSO-RI-261323)
 */

package recomputations2

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"

	"github.com/ARGOeu/argo-web-api/utils/config"
	"github.com/argoeu/argo-web-api/utils/authentication"
	"github.com/argoeu/argo-web-api/utils/mongo"
)

func List(r *http.Request, cfg config.Config) (int, http.Header, []byte, error) {
	//STANDARD DECLARATIONS START
	code := http.StatusOK
	h := http.Header{}
	output := []byte("")
	err := error(nil)
	// contentType := "application/xml"
	// charset := "utf-8"
	//STANDARD DECLARATIONS END

	urlValues := r.URL.Query()

	filter := IncomingRequest{
		StartTime: urlValues.Get("start_time"),
		EndTime:   urlValues.Get("end_time"),
		Reason:    urlValues.Get("reason"),
	}

	tenantDbConfig, err := authentication.AuthenticateTenant(r.Header, cfg)

	if err != nil {
		output = []byte(http.StatusText(http.StatusUnauthorized))
		code = http.StatusUnauthorized //If wrong api key is passed we return UNAUTHORIZED http status
		h.Set("Content-Type", fmt.Sprintf("%s; charset=%s", contentType, charset))
		return code, h, output, err
	}

	session, err := mongo.OpenSession(tenantDbConfig)

	if err != nil {
		code = http.StatusInternalServerError
		return code, h, output, err
	}

	results := []MongoInterface{}
	err = mongo.Find(session, tenantDbConfig.Db, "recomputations", nil, "timestamp", &results)

	if err != nil {
		code = http.StatusInternalServerError
		return code, h, output, err
	}

	return code, h, output, err

}

func SubmitRecomputation(r *http.Request, cfg config.Config) (int, http.Header, []byte, error) {
	//STANDARD DECLARATIONS START
	code := http.StatusOK
	h := http.Header{}
	output := []byte("")
	err := error(nil)
	// contentType := "application/xml"
	// charset := "utf-8"
	//STANDARD DECLARATIONS END

	var incomingRequest IncomingRequest
	// urlValues := r.URL.Query()
	body, err := ioutil.ReadAll(io.LimitReader(r.Body, cfg.Server.ReqSizeLimit))
	if err != nil {
		panic(err)
	}
	if err := r.Body.Close(); err != nil {
		panic(err)
	}
	if err := json.Unmarshal(body, &incomingRequest); err != nil {
		code = 422 // unprocessable entity
	}

	return code, h, output, err
}
