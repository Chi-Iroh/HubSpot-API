import { Client } from "./src/Client";

async function example() {
    let client = new Client("HubSpot API Key");
    await client.contactsManager.GetAll().then(console.log);
    await client.contactsManager.GetById(151).then(console.log);
}

example();