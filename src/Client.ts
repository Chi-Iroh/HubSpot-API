import { ContactsManager } from "./Contacts/ContactsManager";
import { CompaniesManager } from "./Companies/CompaniesManager";
import { TicketsManager } from "./Tickets/TicketsManager";
import { TransactionsManager } from "./Transactions/TransactionsManager";
import { HttpRequestManager } from "./HttpRequestManager";
import { PrintError } from "./PrintError";

export class Client {
    private apiKey : string;
    private httpRequestManager : HttpRequestManager;
    public contactsManager : ContactsManager;
    public companiesManager : CompaniesManager;
    public ticketsManager : TicketsManager;
    public transactionsManager : TransactionsManager;

    constructor(apiKey : string) {
        this.apiKey = apiKey;
        this.httpRequestManager = new HttpRequestManager(this.apiKey);
        this.contactsManager = new ContactsManager(this.httpRequestManager);
        this.companiesManager = new CompaniesManager(this.httpRequestManager);
        this.ticketsManager = new TicketsManager(this.httpRequestManager);
        this.transactionsManager = new TransactionsManager(this.httpRequestManager);
    }

    public static PrintError : Function = PrintError;
};