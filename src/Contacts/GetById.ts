import { HttpRequestManager } from "../HttpRequestManager";

export function GetById(httpRequestManager : HttpRequestManager, id : number) {
    return httpRequestManager.send(
        `https://api.hubapi.com/crm/v3/objects/contacts/${id}`
    );
}