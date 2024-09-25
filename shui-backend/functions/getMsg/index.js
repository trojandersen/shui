const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");

module.exports.handler = async (event) => {
  
  try {
      const data = await db.scan({
          TableName: 'shuiMsg',
          ConsistentRead: true  // Ensuring strongly consistent reads
      })
      
      return sendResponse(data)
    } catch (error) {
      return sendError(500, error)
    }
  
};