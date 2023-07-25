export async function getAll(apiKey : string) {
    const response = await fetch(
        "https://api.hubapi.com/crm/v3/objects/contacts",
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