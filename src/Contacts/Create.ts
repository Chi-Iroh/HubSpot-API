import { HttpRequestManager } from "../HttpRequestManager";

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
        "https://api.hubapi.com/crm/v3/objects/contacts/",
        "POST",
        new Headers({
            "content-type" : "application/json;charset=UTF-8"
        }),
        properties
    );
}