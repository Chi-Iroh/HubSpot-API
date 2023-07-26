import * as ApiUrl from "../ApiUrl";
import { Api } from "../Api";

export function GetById(Api : Api, id : number) : Promise<any> {
    return Api.find(ApiUrl["API_URL_CONTACTS"], id);
}