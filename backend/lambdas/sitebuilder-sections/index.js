import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    PutCommand,
    GetCommand,
    DeleteCommand,
    ScanCommand
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);
const tableName = "sitebuilder-sections";
const sectionPath = "/section";
const sectionsPath = "/sections";

export const handler = async (event) => {
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
    };

    console.log('event sections: ', JSON.stringify(event))
    try {
        switch(true) {
            case event.httpMethod === "GET" && event.path === sectionsPath:
                body = await dynamo.send(
                    new ScanCommand({ 
                        TableName: tableName,
                        FilterExpression : "#pageId = :pageId",
                        ExpressionAttributeNames: { "#pageId": "pageId"},
                        ExpressionAttributeValues: {
                            ':pageId': event.queryStringParameters.pageId
                        }
                    })
                );
                body = body.Items;
                break;
            case event.httpMethod === "GET" && event.path === sectionPath:
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
            case event.httpMethod === "POST" && event.path === sectionPath:
                // {
                //     "index": 0,
                //     "siteId": "jessysorchard",
                //     "pageId": "w345y6ui7kuymhgtret5y",
                //     "id": "34t5yuj5rtr5e534",
                //     "type": "one-col",
                //     "title": {
                //         "position": "right",
                //         "text": "section one title"
                //     }
                //     "subtitle": {
                //         "position": "right",
                //         "text": "section subtitle"
                //     },
                //     "columns": [
                //         {
                //             "content": [
                //                 {
                //                     "type": "paragraph",
                //                     "content": [
                //                         "Uptatem aut delectus blanditiis At perspiciatis autem ad accusamus cuut numquam quas ea ver"
                //                     ]
                //                 }
                //             ],
                //             "position": "center"
                //         }
                //     ],
                // }
                let requestJSON = JSON.parse(event.body);
                await dynamo.send(
                    new PutCommand({
                        TableName: tableName,
                        Item: requestJSON
                    })
                );
                body = `Put item ${requestJSON.id}`;
                break;
            case event.httpMethod === "DELETE" && event.path === sectionPath:
                await dynamo.send(
                    new DeleteCommand({
                        TableName: tableName,
                        Key: {
                            id: event.queryStringParameters.id,
                        },
                    })
                );
                body = `Deleted item ${event.queryStringParameters.id}`;
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
