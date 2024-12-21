const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");

async function getMsgs() {
  const { Items } = await db.scan({
    TableName: "shuiMsg",
  });

  return Items;
}

exports.handler = async (event) => {
  try {
    const data = await getMsgs();
    return sendResponse(data);
  } catch (error) {
    return sendError(500, error.message);
  }
};
