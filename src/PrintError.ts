import { AxiosError } from "axios";

interface HubSpotError {
    status          : string;
    message         : string;
    correlationId   : string;
    category        : string;
};

export function PrintError(error : AxiosError) : void {
    const hubSpotError : HubSpotError = error.response?.data as HubSpotError;

    if (hubSpotError != undefined) {
        console.error(
            `Status ${error.response?.status} : ${error.response?.statusText}\n`    +
            `Message : ${hubSpotError.message}\n`                                   +
            `Correlation ID : ${hubSpotError.correlationId}\n`                      +
            `Category : ${hubSpotError.category}`
        );
    } else {
        console.error(`${error.cause?.name} : ${error.cause?.message}`);
    }
}