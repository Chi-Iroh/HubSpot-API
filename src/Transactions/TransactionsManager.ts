import { HttpRequestManager } from "HttpRequestManager";

export class TransactionsManager {
    private httpRequestManager : HttpRequestManager;

    constructor(httpRequestManager : HttpRequestManager) {
        this.httpRequestManager = httpRequestManager;
    }
};