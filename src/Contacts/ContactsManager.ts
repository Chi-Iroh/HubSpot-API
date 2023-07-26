import { Api } from "../Api";
import { ContactProperties, Create } from "./Create";
import { GetAll } from "./GetAll";
import { GetById } from "./GetById";

export class ContactsManager {
    private Api : Api;

    public Create : Function = (contactProperties : ContactProperties) => Create(this.Api, contactProperties);
    public GetAll : Function = () => GetAll(this.Api);
    public GetById : Function = (id : number) => GetById(this.Api, id);

    constructor(Api : Api) {
        this.Api = Api;
    }
};