import { Client } from "./src/Client";

function PrintContact(contact) {
    console.log(
        `Contact n°${contact.id}\n`,
        `\tFirst name : ${contact.properties.firstname}\n`,
        `\tLast name : ${contact.properties.lastname}\n`,
        `\tEmail : ${contact.properties.email}\n`,
        `\tCreation date : ${contact.properties.createdate}\n`,
        `\tLast modification date : ${contact.properties.lastmodifieddate}`
    );
}

async function Example() {
    let client = new Client("HubSpot API Key");
    await client.contactsManager.GetAll().then(console.log);
    await client.contactsManager.GetById(151).then(console.log);
    await client.contactsManager.Create(
        "example@hubspot.com",
        "Jane",
        "Doe",
        "(555) 555-5555",
        "HubSpot",
        "hubspot.com",
        "marketingqualifiedlead"
    );
    await client.contactsManager.GetAll().then(
        (contacts) => {
            for (let contact of contacts.results) {
                PrintContact(contact);
            }
        }
    );
}

Example();