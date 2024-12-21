const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");

async function getMsgById(msgId) {
  try {
    const result = await db.get({
      TableName: "shuiMsg",
      Key: { msgId },
    });

    if (!result.Item) {
      throw new Error("Message not found");
    }

    return result.Item;
  } catch (error) {
    throw new Error("Error fetching message: " + error.message);
  }
}

exports.handler = async (event) => {
  try {
    const { msgId } = event.pathParameters;
    const fetchedMsg = await getMsgById(msgId);
    return sendResponse({
      message: "Message fetched successfully",
      fetchedMsg,
    });
  } catch (error) {
    return sendError(500, error.message);
  }
};
