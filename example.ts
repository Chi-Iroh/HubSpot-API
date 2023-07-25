import { Client } from "./src/Client"

var client = new Client("HubSpot API Key");
client.contactsManager.getAll().then(console.log);