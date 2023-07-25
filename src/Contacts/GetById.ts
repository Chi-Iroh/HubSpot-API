export async function GetById(apiKey : string, id : number) {
    const response = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${id}`,
        {
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${apiKey}`
            }
        }
    );

    if (!response.ok) {
        throw new Error(`${response.statusText} ${await response.text()}`);
    }
    return response.json();
}