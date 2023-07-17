import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    ScanCommand,
    PutCommand,
    GetCommand,
    DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);
const tableName = "sitebuilder";
const healthPath = "/health";
const sitePath = "/site";
const sitesPath = "/sites";

export const handler = async (event) => {
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
    };

    console.log('event sites: ', JSON.stringify(event))

    try {
        switch(true) {
            case event.httpMethod === "GET" && event.path === healthPath:
                body = "healthy"
                break
            case event.httpMethod === "GET" && event.path === sitesPath:
                body = await dynamo.send(
                    new ScanCommand({ TableName: tableName })
                );
                body = body.Items;
                break;
            case event.httpMethod === "GET" && event.path === sitePath:
                body = await dynamo.send(
                    new GetCommand({
                        TableName: tableName,
                        Key: {
                            id: event.queryStringParameters.id,
                        },
                    })
                );
                body = body.Item;
                break
            case event.httpMethod === "POST" && event.path === sitePath:
                let requestJSON = JSON.parse(event.body);
                await dynamo.send(
                    new PutCommand({
                        TableName: tableName,
                        Item: requestJSON
                    })
                );
                body = `Put item ${requestJSON.id}`;
                break;
            case event.httpMethod === "DELETE" && event.path === sitePath:
                await dynamo.send(
                    new DeleteCommand({
                        TableName: tableName,
                        Key: {
                            id: event.queryStringParameters.id,
                        },
                    })
                );
                body = `Deleted item ${event.pathParameters.id}`;
                break
            default:
                throw new Error(`Unsupported route: "${event.routeKey}"`);
        }
    } catch (err) {
        statusCode = 400;
        body = err.message;
        console.log("error: ", JSON.stringify(err))
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};
