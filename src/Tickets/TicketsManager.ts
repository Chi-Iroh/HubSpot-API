import { HttpRequestManager } from "HttpRequestManager";

export class TicketsManager {
    private httpRequestManager : HttpRequestManager;

    constructor(httpRequestManager : HttpRequestManager) {
        this.httpRequestManager = httpRequestManager;
    }
};