import { ContactsManager } from "./Contacts/ContactsManager";
import { HttpRequestManager } from "./HttpRequestManager";

// Waiting for implementation
declare class CompaniesManager {};
declare class TicketsManager {};
declare class TransactionsManager {};

export class Client {
    apiKey : string;
    httpRequest : HttpRequestManager;
    contactsManager : ContactsManager;
    companiesManager : CompaniesManager;
    ticketsManager : TicketsManager;
    transactionsManager : TransactionsManager;

    constructor(apiKey : string) {
        this.apiKey = apiKey;
        this.httpRequest = new HttpRequestManager(this.apiKey);
        this.contactsManager = new ContactsManager(this.httpRequest);
    }
};