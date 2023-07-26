import axios, { AxiosHeaders, AxiosResponse } from "axios";
import { ApiTarget } from "./ApiUrl";

export type HttpRequestType = "GET" | "POST";

export class Api {
    private apiKey : string;
    private authenticationHeader : AxiosHeaders;

    constructor(apiKey : string) {
        this.apiKey = apiKey;
        this.authenticationHeader = new AxiosHeaders({ "Authorization" : `Bearer ${this.apiKey}` });
    }

    public async findAll(target : ApiTarget) : Promise<any> {
        const response = await axios.get(
            target,
            { "headers" : this.authenticationHeader }
        );
        return await response.data;
    }

    public async find(target : ApiTarget, id : number) : Promise<any> {
        const response = await axios.get(
            `${target}/${id}`,
            { "headers" : this.authenticationHeader }
        );
        return await response.data;
    }

    public async create(target : ApiTarget, body : string) : Promise<any> {
        const response = await axios.post(
            target,
            { "headers" : this.authenticationHeader.concat({"content-type" : "application/json;charset=UTF-8"}) }
        );
        return await response.data;
    }
};