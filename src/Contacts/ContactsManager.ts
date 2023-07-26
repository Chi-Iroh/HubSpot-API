import { HttpRequestManager } from "../HttpRequestManager";
import { Create } from "./Create";
import { GetAll } from "./GetAll";
import { GetById } from "./GetById";

export class ContactsManager {
    private httpRequestManager : HttpRequestManager;

    private WrapperCreate(email : string, firstName : string, lastName : string, phone : string, company : string, website : string, lifeCycleStage : string) : Promise<any> {
        return Create(this.httpRequestManager, email, firstName, lastName, phone, company, website, lifeCycleStage);
    }

    public Create : Function = this.WrapperCreate;
    public GetAll : Function = () => GetAll(this.httpRequestManager);
    public GetById : Function = (id : number) => GetById(this.httpRequestManager, id);

    constructor(httpRequestManager : HttpRequestManager) {
        this.httpRequestManager = httpRequestManager;
    }
};