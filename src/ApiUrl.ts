/*
@brief API base URL, root of all endpoints.
*/
export const API_URL_BASE : string = "https://api.hubapi.com";

/*
@brief API contacts target.
*/
export const API_URL_CONTACTS : string = `${API_URL_BASE}/crm/v3/objects/contacts`;

/*
@brief Any valid API target.
*/
export type ApiTarget = typeof API_URL_BASE | typeof API_URL_CONTACTS;