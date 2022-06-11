const db = require("../../config/mongoDb");

exports.getList = async () => {
  var result = await db.find("our_solution");
  return result;
};
