import { HttpRequestManager } from "../HttpRequestManager";
import * as ApiUrl from "../ApiUrl"

export interface ContactProperties {
    email           : string;
    firstName       : string;
    lastName        : string;
    phone           : string;
    company         : string;
    website         : string;
    lifeCycleStage  : string;
};

export function Create(httpRequestManager : HttpRequestManager, contactProperties : ContactProperties) : Promise<any> {
    const properties = JSON.stringify(
        {
            "properties" : {
                "email"             : contactProperties.email,
                "firstname"         : contactProperties.firstName,
                "lastname"          : contactProperties.lastName,
                "phone"             : contactProperties.phone,
                "company"           : contactProperties.company,
                "website"           : contactProperties.website,
                "lifecyclestage"    : contactProperties.lifeCycleStage
            }
        }
    );

    return httpRequestManager.send(
        ApiUrl.API_URL_CONTACTS,
        "POST",
        new Headers({
            "content-type" : "application/json;charset=UTF-8"
        }),
        properties
    );
}