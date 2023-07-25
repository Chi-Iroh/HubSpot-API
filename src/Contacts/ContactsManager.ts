import { GetAll } from "./GetAll";
import { GetById } from "./GetById"

export class ContactsManager {
    private apiKey : string;
    public GetAll : Function = () => GetAll(this.apiKey);
    public GetById : Function = (id : number) => GetById(this.apiKey, id);

    constructor(apiKey : string) {
        this.apiKey = apiKey;
    }
};