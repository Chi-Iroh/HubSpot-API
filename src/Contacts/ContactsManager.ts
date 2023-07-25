import { HttpRequestManager } from "../HttpRequestManager";
import { GetAll } from "./GetAll";
import { GetById } from "./GetById";

export class ContactsManager {
    private httpRequestManager : HttpRequestManager;
    public GetAll : Function = () => GetAll(this.httpRequestManager);
    public GetById : Function = (id : number) => GetById(this.httpRequestManager, id);

    constructor(httpRequestManager : HttpRequestManager) {
        this.httpRequestManager = httpRequestManager;
    }
};