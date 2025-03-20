const db = require("../models/index");

const getCaloByName = async (name) => {
  const caloRecord = await db.Calo.findOne({
    where: { name: name },
  });
  return caloRecord;
}; 

module.exports = { getCaloByName };
