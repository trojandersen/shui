const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");
const { v4: uuidv4 } = require("uuid");

async function createMsg(genId, body) {
  const date = new Date().toISOString().replace("T", " ").split(".")[0];
  await db.put({
    TableName: "shuiMsg",
    Item: {
      msgId: genId,
      text: body.text,
      username: body.username,
      createdAt: date,
    },
  });
}

module.exports.handler = async (event) => {
  try {
    const genId = uuidv4();
    const body = JSON.parse(event.body);
    await createMsg(genId, body);
    return sendResponse({
      message: "Message created successfully",
      msgId: genId,
    });
  } catch (error) {
    return sendError(500, error.message);
  }
};
