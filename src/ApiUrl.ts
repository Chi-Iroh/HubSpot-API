export const API_URL_BASE : string = "https://api.hubapi.com";

export const API_URL_CONTACTS : string = `${API_URL_BASE}/crm/v3/objects/contacts`;

export type ApiTarget = typeof API_URL_BASE | typeof API_URL_CONTACTS;