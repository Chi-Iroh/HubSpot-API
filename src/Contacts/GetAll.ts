import { Api } from "../Api";
import * as ApiUrl from "../ApiUrl"

/*
@brief Gets all contacts.
@param api API to send requests
@returns request response (Promise<any>)
@throw AxiosError
*/
export function GetAll(api : Api) : Promise<any> {
    return api.findAll(ApiUrl["API_URL_CONTACTS"]);
}
