import { getAll as getAllContacts } from "./getAll";

export class ContactsManager {
    private apiKey : string;
    public getAll : Function = () => getAllContacts(this.apiKey);

    constructor(apiKey : string) {
        this.apiKey = apiKey;
    }
};