import * as ApiUrl from "../ApiUrl";
import { HttpRequestManager } from "../HttpRequestManager";

export function GetById(httpRequestManager : HttpRequestManager, id : number) : Promise<any> {
    return httpRequestManager.send(
        `${ApiUrl.API_URL_CONTACTS}/${id}`,
        "GET"
    );
}