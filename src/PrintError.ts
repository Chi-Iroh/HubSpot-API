import { AxiosError } from "axios";

/*
Wraps HubSpot API error context.
*/
interface HubSpotError {
    status          : string;
    message         : string;
    correlationId   : string;
    category        : string;
};

/*
@brief Displays more human-readable errors in standard error stream.
@note If HubSpot API error, only displays HubSpot-related context, otherwise display everything.
*/
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