import { HttpRequestManager } from "../HttpRequestManager";

export async function Create(httpRequestManager : HttpRequestManager, email : string, firstName : string, lastName : string, phone : string, company : string, website : string, lifeCycleStage : string) {
    const properties = JSON.stringify(
        {
            "properties" : {
                "email" : email,
                "firstname" : firstName,
                "lastname" : lastName,
                "phone" : phone,
                "company" : company,
                "website" : website,
                "lifecyclestage" : lifeCycleStage
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