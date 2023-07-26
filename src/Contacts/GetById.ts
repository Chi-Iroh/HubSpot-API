import * as ApiUrl from "../ApiUrl";
import { HttpRequestManager } from "../HttpRequestManager";

export function GetById(httpRequestManager : HttpRequestManager, id : number) : Promise<any> {
    return httpRequestManager.find(ApiUrl["API_URL_CONTACTS"], id);
}