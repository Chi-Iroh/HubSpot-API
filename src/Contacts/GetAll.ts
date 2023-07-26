import { Api } from "../Api";
import * as ApiUrl from "../ApiUrl"

export function GetAll(Api : Api) : Promise<any> {
    return Api.findAll(ApiUrl["API_URL_CONTACTS"]);
}
