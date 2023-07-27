import { AxiosError } from "axios";
import { Client } from "./src/Client";

function PrintContact(contact : any) : void {
    console.log(
        `Contact n°${contact.id}\n`                                         +
        `\tFirst name : ${contact.properties.firstname}\n`                  +
        `\tLast name : ${contact.properties.lastname}\n`                    +
        `\tEmail : ${contact.properties.email}\n`                           +
        `\tCreation date : ${contact.properties.createdate}\n`              +
        `\tLast modification date : ${contact.properties.lastmodifieddate}`
    );
}

async function Example(client : Client) : Promise<void> {
    await client.contactsManager.GetById(151).then(console.log);    // Get contact n°151
    await client.contactsManager.GetAll().then(console.log);        // Gets all contacts
    await client.contactsManager.Create(                            // Create a contact with these information
        {
            "email"             : "example94@hubspot.com",
            "firstName"         : "Jane",
            "lastName"          : "Doe",
            "phone"             : "(555) 555-5555",
            "company"           : "HubSpot",
            "website"           : "hubspot.com",
            "lifeCycleStage"    : "marketingqualifiedlead"
        }
    );

    // Gets all contacts but improves display
    await client.contactsManager.GetAll().then(
        (contacts : any) => {
            for (let contact of contacts.results) {
                PrintContact(contact);
            }
        }
    );
}

async function Main() : Promise<void> {
    try {
        let client = new Client("HubSpot API Key"); // instantion with the API Key
        await Example(client);
    } catch (error : any) {
        if (error instanceof AxiosError) {
            Client.PrintError(error);               // PrintError can handle AxiosError
        } else {
            console.error(error);                   // Any TypeScript error that may happen
        }
    }
}

Main()