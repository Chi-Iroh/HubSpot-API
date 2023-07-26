import { HttpRequestManager } from "HttpRequestManager";

export class CompaniesManager {
    private httpRequestManager : HttpRequestManager;

    constructor(httpRequestManager : HttpRequestManager) {
        this.httpRequestManager = httpRequestManager;
    }
};