import axios, { AxiosHeaders, AxiosResponse } from "axios";
import { ApiTarget } from "./ApiUrl";

/**
@brief Valid HTTP request type.
@note Only contains used request type, it may grow as features are added.
*/
export type HttpRequestType = "GET" | "POST";

/**
@brief Class requesting HubSpot API.
*/
export class Api {
    private apiKey : string;

    constructor(apiKey : string) {
        this.apiKey = apiKey;
        axios.defaults.headers["Authorization"] = `Bearer ${this.apiKey}`;
    }

    /**
    @brief Finds all data in a target.
    @param target API target to request (GET)
    @returns request response (Promise<any>)
    @throw AxiosError
    */
    public async findAll(target : ApiTarget) : Promise<any> {
        const response = await axios.get(
            target,
            {}
        );
        return await response.data;
    }

    /**
    @brief Finds data of a specific ID in a target.
    @param target API target to request (GET)
    @param id ID to search
    @returns request response (Promise<any>)
    @throw AxiosError
    */
    public async find(target : ApiTarget, id : number) : Promise<any> {
        const response = await axios.get(
            `${target}/${id}`,
            {}
        );
        return await response.data;
    }

    /**
    @brief Creates data in a target.
    @param target API target to request (POST)
    @param body Data to create (must be JSON-formatted)
    @returns request response (Promise<any>)
    @throw AxiosError
    */
    public async create(target : ApiTarget, body : string) : Promise<any> {
        const response = await axios.post(
            target,
            {
                "headers" : {
                    "content-type" : "application/json;charset=UTF-8"
                }
            }
        );
        return await response.data;
    }
};