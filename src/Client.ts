import { ContactsManager } from "./Contacts/ContactsManager";
declare class CompaniesManager {};
declare class TicketsManager {};
declare class TransactionsManager {};

export class Client {
    apiKey : string;
    contactsManager : ContactsManager;
    companiesManager : CompaniesManager;
    ticketsManager : TicketsManager;
    transactionsManager : TransactionsManager;

    constructor(apiKey : string) {
        this.apiKey = apiKey;
        this.contactsManager = new ContactsManager(apiKey);
    }
};