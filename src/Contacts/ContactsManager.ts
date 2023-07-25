import { HttpRequestManager } from "../HttpRequestManager";
import { GetAll } from "./GetAll";
import { GetById } from "./GetById";

export class ContactsManager {
    private httpRequest : HttpRequestManager;
    public GetAll : Function = () => GetAll(this.httpRequest);
    public GetById : Function = (id : number) => GetById(this.httpRequest, id);

    constructor(httpRequest : HttpRequestManager) {
        this.httpRequest = httpRequest;
    }
};