const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");
const { v4: uuidv4 } = require('uuid');

async function createMsg(msgId) {
  await db.put({
    TableName: 'shuiMsg',
    Item: {
      id: msgId,
      text: text,
      username: username,
      createdAt: createdAt
    },
  });
}

module.exports.handler = async (event) => {
  const msgId = uuidv4();
  try {
      await createTicket(msgId);
      
      return sendResponse(data)
    } catch (error) {
      return sendError(500, error)
    }
  
};