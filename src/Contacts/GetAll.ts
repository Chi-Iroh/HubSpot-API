import { HttpRequestManager } from "../HttpRequestManager";

export async function GetAll(httpRequestManager : HttpRequestManager) : Promise<any> {
    return httpRequestManager.send(
        "https://api.hubapi.com/crm/v3/objects/contacts"
    );
}