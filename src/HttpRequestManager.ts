export type HttpRequestType = "GET" | "POST";

export class HttpRequestManager {
    protected apiKey : string;

    constructor(apiKey : string) {
        this.apiKey = apiKey;
    }

    public async send(url : string, requestType : HttpRequestType = "GET", headers : Headers = new Headers(), body : string = "") : Promise<any> {
        if (headers.has("Authorization")) {
            throw new Error("Header cannot have 'Authorization' field !");
        }
        headers.set("Authorization", `Bearer ${this.apiKey}`);

        const response : Response = await fetch(
            url,
            {
                method : requestType,
                headers : headers,
                body : (requestType == "GET") ? null : body
            }
        );

        if (!response.ok) {
            headers.delete("Authorization");
            throw new Error(`${response.statusText} ${await response.text()}`);
        }
        headers.delete("Authorization");

        return await response.json();
    }
};