import { HttpRequestManager } from "../HttpRequestManager";

export function GetAll(httpRequestManager : HttpRequestManager) : Promise<any> {
    return httpRequestManager.send(
        "https://api.hubapi.com/crm/v3/objects/contacts",
        "GET"
    );
}