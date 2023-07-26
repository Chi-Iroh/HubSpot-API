import { Api } from "Api";

export class TransactionsManager {
    private api : Api;

    constructor(api : Api) {
        this.api = api;
    }
};