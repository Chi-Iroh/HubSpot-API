import { ContactsManager } from "./Contacts/ContactsManager";
import { CompaniesManager } from "./Companies/CompaniesManager";
import { TicketsManager } from "./Tickets/TicketsManager";
import { TransactionsManager } from "./Transactions/TransactionsManager";
import { Api } from "./Api";
import { PrintError } from "./PrintError";

/**
@brief Client class to use any feature of the API.
*/
export class Client {
    private apiKey : string;
    private api : Api;
    public contactsManager : ContactsManager;
    public companiesManager : CompaniesManager;
    public ticketsManager : TicketsManager;
    public transactionsManager : TransactionsManager;

    constructor(apiKey : string) {
        this.apiKey = apiKey;
        this.api = new Api(this.apiKey);
        this.contactsManager = new ContactsManager(this.api);
        this.companiesManager = new CompaniesManager(this.api);
        this.ticketsManager = new TicketsManager(this.api);
        this.transactionsManager = new TransactionsManager(this.api);
    }

    public static PrintError : Function = PrintError;
};