import { Api } from "Api";

export class TicketsManager {
    private Api : Api;

    constructor(Api : Api) {
        this.Api = Api;
    }
};