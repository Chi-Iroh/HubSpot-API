import { Api } from "../Api";
import * as ApiUrl from "../ApiUrl"
import { ApiTarget } from "../ApiUrl";

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
@brief Class providing services about contacts.
*/
export class ContactsManager {
    private api : Api;

    constructor(api : Api) {
        this.api = api;
    }

    /**
    @brief Gets all contacts.
    @param api API to send requests
    @returns request response (Promise<any>)
    @throw AxiosError
    */
    public GetAll() : Promise<any> {
        return this.api.findAll(ApiUrl["API_URL_CONTACTS"]);
    }

    /**
    @brief Gets a contact by its ID.
    @param api API to send requests
    @returns request response (Promise<any>)
    @throw AxiosError
    */
    public GetById(id : number) : Promise<any> {
        return this.api.find(ApiUrl["API_URL_CONTACTS"], id);
    }

    /**
    @brief Creates a contact.
    @param api API to send requests
    @param contactProperties contact information
    @returns request response (Promise<any>)
    @throw AxiosError
    */
    public Create(contactProperties : ContactProperties) : Promise<any> {
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

        return this.api.create(ApiUrl["API_URL_CONTACTS"], properties);
    }


};