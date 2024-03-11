const Product = require("../models/productModels");

const getAll = async (req, res) => {
  try {
    const response = await Product.find({});
    res.status(200).json({
      success: true,
      data: response,
      message: "Data Fetch Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = getAll;
