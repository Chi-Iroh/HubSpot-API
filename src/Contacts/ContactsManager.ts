import { HttpRequestManager } from "../HttpRequestManager";
import { ContactProperties, Create } from "./Create";
import { GetAll } from "./GetAll";
import { GetById } from "./GetById";

export class ContactsManager {
    private httpRequestManager : HttpRequestManager;

    public Create : Function = (contactProperties : ContactProperties) => Create(this.httpRequestManager, contactProperties);
    public GetAll : Function = () => GetAll(this.httpRequestManager);
    public GetById : Function = (id : number) => GetById(this.httpRequestManager, id);

    constructor(httpRequestManager : HttpRequestManager) {
        this.httpRequestManager = httpRequestManager;
    }
};