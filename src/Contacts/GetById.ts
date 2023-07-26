import * as ApiUrl from "../ApiUrl";
import { Api } from "../Api";

/*
@brief Gets a contact by its ID.
@param api API to send requests
@returns request response (Promise<any>)
@throw AxiosError
*/
export function GetById(api : Api, id : number) : Promise<any> {
    return api.find(ApiUrl["API_URL_CONTACTS"], id);
}