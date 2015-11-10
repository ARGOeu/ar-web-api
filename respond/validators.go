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
 * or implied, of either GRNET S.A., SRCE or IN2P3 CNRS Computing
 * Centre
 *
 * The work represented by this source file is partially funded by
 * the EGI-InSPIRE project through the European Commission's 7th
 * Framework Programme (contract # INFSO-RI-261323)
 */

package respond

import (
	"strconv"
	"time"
)

func validateDate(dateStr string) (int, error) {
	parsedTime, err := time.Parse(zuluForm, dateStr)
	if err != nil {
		return 0, err
	}
	ymdTime, err := strconv.Atoi(parsedTime.Format(ymdForm))
	return ymdTime, err
}

func VadlidateDateRange(dateStart string, dateEnd string) (int, int, []string) {
	parsedStart, errStart := validateDate(dateStart)
	parsedEnd, errEnd := validateDate(dateEnd)
	errs := []string{}
	if errStart != nil {
		errs = append(errs, "Start time parse error")
	}
	if errEnd != nil {
		errs = append(errs, "End time parse error")
	}
	return parsedStart, parsedEnd, errs
}