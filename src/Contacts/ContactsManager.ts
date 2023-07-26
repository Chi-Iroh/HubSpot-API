import { Api } from "../Api";
import { ContactProperties, Create } from "./Create";
import { GetAll } from "./GetAll";
import { GetById } from "./GetById";

/**
@brief Class providing services about contacts.
*/
export class ContactsManager {
    private api : Api;

    public Create : Function = (contactProperties : ContactProperties) => Create(this.api, contactProperties);
    public GetAll : Function = () => GetAll(this.api);
    public GetById : Function = (id : number) => GetById(this.api, id);

    constructor(api : Api) {
        this.api = api;
    }
};