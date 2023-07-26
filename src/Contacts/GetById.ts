import * as ApiUrl from "../ApiUrl";
import { Api } from "../Api";

export function GetById(api : Api, id : number) : Promise<any> {
    return api.find(ApiUrl["API_URL_CONTACTS"], id);
}