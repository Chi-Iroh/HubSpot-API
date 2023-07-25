import { HttpRequestManager } from "../HttpRequestManager";

export async function GetAll(httpRequest : HttpRequestManager) {
    return httpRequest.send(
        "https://api.hubapi.com/crm/v3/objects/contacts"
    );
}