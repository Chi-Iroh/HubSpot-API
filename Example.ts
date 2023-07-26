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
    await client.contactsManager.GetById(151).then(console.log);
    await client.contactsManager.GetAll().then(console.log);
    await client.contactsManager.Create(
        "example7@hubspot.com",
        "Jane",
        "Doe",
        "(555) 555-5555",
        "HubSpot",
        "hubspot.com",
        "marketingqualifiedlead"
    );
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
        let client = new Client("HubSpot API Key");
        await Example(client);
    } catch (error : any) {
        if (error instanceof AxiosError) {
            Client.PrintError(error);
        } else {
            console.error(error);
        }
    }
}

Main()