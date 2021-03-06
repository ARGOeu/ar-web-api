/*
 * Copyright (c) 2018 GRNET S.A.
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

package latest

import "encoding/xml"

// MongoInterface to retrieve and insert metricProfiles in mongo
// type MongoInterface struct {
// 	ID       string    `bson:"id" json:"id"`
// 	Name     string    `bson:"name" json:"name"`
// 	Services []Serv `bson:"services" json:"services"`
// }

// MetricList represents a list of metric data
type MetricList struct {
	MetricData []MetricData `bson:"metric_data" json:"metric_data"`
}

// MetricData is a struct representing a metric data record
type MetricData struct {
	Group     string `bson:"endpoint_group" json:"endpoint_group"`
	Service   string `bson:"service" json:"service"`
	Hostname  string `bson:"host" json:"endpoint"`
	Metric    string `bson:"metric" json:"metric"`
	Timestamp string `bson:"timestamp" json:"timestamp"`
	Status    string `bson:"status" json:"status"`
	Summary   string `bson:"summary" json:"summary,omitempty"`
	Message   string `bson:"message" json:"message,omitempty"`
}

// Message struct to hold the json/xml response
type messageOUT struct {
	XMLName xml.Name `xml:"root" json:"-"`
	Message string   `xml:"message" json:"message"`
	Code    string   `xml:"code,omitempty" json:"code,omitempty"`
}
