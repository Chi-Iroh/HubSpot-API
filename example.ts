import { Client } from "./src/Client"

var client = new Client("HubSpot API Key");
client.contactsManager.GetAll().then(console.log);
client.contactsManager.GetById(151).then(console.log);