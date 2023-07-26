import { ContactsManager } from "./Contacts/ContactsManager";
import { CompaniesManager } from "./Companies/CompaniesManager";
import { TicketsManager } from "./Tickets/TicketsManager";
import { TransactionsManager } from "./Transactions/TransactionsManager";
import { Api } from "./Api";
import { PrintError } from "./PrintError";

export class Client {
    private apiKey : string;
    private Api : Api;
    public contactsManager : ContactsManager;
    public companiesManager : CompaniesManager;
    public ticketsManager : TicketsManager;
    public transactionsManager : TransactionsManager;

    constructor(apiKey : string) {
        this.apiKey = apiKey;
        this.Api = new Api(this.apiKey);
        this.contactsManager = new ContactsManager(this.Api);
        this.companiesManager = new CompaniesManager(this.Api);
        this.ticketsManager = new TicketsManager(this.Api);
        this.transactionsManager = new TransactionsManager(this.Api);
    }

    public static PrintError : Function = PrintError;
};