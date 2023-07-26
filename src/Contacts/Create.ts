import { Api } from "../Api";
import * as ApiUrl from "../ApiUrl"

/**
@brief Information about a contact.
*/
export interface ContactProperties {
    email           : string;
    firstName       : string;
    lastName        : string;
    phone           : string;
    company         : string;
    website         : string;
    lifeCycleStage  : string;
};

/**
@brief Creates a contact.
@param api API to send requests
@param contactProperties contact information
@returns request response (Promise<any>)
@throw AxiosError
*/
export function Create(api : Api, contactProperties : ContactProperties) : Promise<any> {
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

    return api.create(ApiUrl["API_URL_CONTACTS"], properties);
}