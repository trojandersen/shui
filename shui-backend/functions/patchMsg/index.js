const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");

async function updateMessage(msgId, text) {
  try {
    const result = await db.update({
      TableName: "shuiMsg",
      Key: { msgId },
      UpdateExpression: "set #text = :text",
      ExpressionAttributeNames: {
        "#text": "text",
      },
      ExpressionAttributeValues: {
        ":text": text,
      },
      ReturnValues: "ALL_NEW",
    });

    return result;
  } catch (error) {
    throw new Error("Error updating message: " + error.message);
  }
}

exports.handler = async (event) => {
  try {
    const { msgId } = event.pathParameters;
    const { text } = JSON.parse(event.body);
    const updatedMessage = await updateMessage(msgId, text);
    return sendResponse({
      message: "Message updated successfully",
      updatedMessage,
    });
  } catch (error) {
    return sendError(500, error.message);
  }
};
