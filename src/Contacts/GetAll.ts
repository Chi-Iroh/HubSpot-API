import { HttpRequestManager } from "../HttpRequestManager";

export async function GetAll(httpRequestManager : HttpRequestManager) {
    return httpRequestManager.send(
        "https://api.hubapi.com/crm/v3/objects/contacts"
    );
}