import { HttpRequestManager } from "../HttpRequestManager";

export function GetById(httpRequest : HttpRequestManager, id : number) {
    return httpRequest.send(
        `https://api.hubapi.com/crm/v3/objects/contacts/${id}`
    );
}