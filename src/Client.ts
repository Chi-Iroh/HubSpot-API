import { ContactsManager } from "./Contacts/ContactsManager";
import { HttpRequestManager } from "./HttpRequestManager";

// Waiting for implementation
declare class CompaniesManager {};
declare class TicketsManager {};
declare class TransactionsManager {};

export class Client {
    private apiKey : string;
    private httpRequest : HttpRequestManager;
    public contactsManager : ContactsManager;
    public companiesManager : CompaniesManager;
    public ticketsManager : TicketsManager;
    public transactionsManager : TransactionsManager;

    constructor(apiKey : string) {
        this.apiKey = apiKey;
        this.httpRequest = new HttpRequestManager(this.apiKey);
        this.contactsManager = new ContactsManager(this.httpRequest);
    }
};