import { Api } from "../Api";
import * as ApiUrl from "../ApiUrl"

export function GetAll(api : Api) : Promise<any> {
    return api.findAll(ApiUrl["API_URL_CONTACTS"]);
}
