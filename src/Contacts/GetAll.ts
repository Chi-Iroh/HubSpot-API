import { HttpRequestManager } from "../HttpRequestManager";
import * as ApiUrl from "../ApiUrl"

export function GetAll(httpRequestManager : HttpRequestManager) : Promise<any> {
    return httpRequestManager.send(
        ApiUrl.API_URL_CONTACTS,
        "GET"
    );
}