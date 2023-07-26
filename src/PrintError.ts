interface HubSpotError {
    status : string;
    message : string;
    correlationId : string;
    category : string;
};

function ExtractErrorNameAndDetails(message : string) : [string, HubSpotError] {
    const startOfJson : number = message.indexOf('{');
    const name : string = message.substring(0, startOfJson);
    const details : string = message.substring(startOfJson);
    return [name, JSON.parse(details)];
}

function TitleString(str : string) : string {
    return str.charAt(0).toUpperCase() + str.substring(1);
}

export function PrintError(error : Error) {
    const [shortDescription, details] = ExtractErrorNameAndDetails(error.message);
    console.error(
        `${TitleString(details.status)} : ${shortDescription}\n`         +
        `Message : ${details.message}\n`                +
        `Correlation ID : ${details.correlationId}\n`   +
        `Category : ${details.category}`
    );
}