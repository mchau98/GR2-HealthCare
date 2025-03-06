const { getCaloByName } = require("../queries/caloQuery");

const getCalo = async (req, res) => {
  try {
    const name = req.body.name;
    const calo = await getCaloByName(name);
    res.status(200).json({
      message: "Get successfully",
      data: calo.kalo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = { getCalo };
