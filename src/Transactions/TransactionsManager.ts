import { Api } from "Api";

export class TransactionsManager {
    private Api : Api;

    constructor(Api : Api) {
        this.Api = Api;
    }
};