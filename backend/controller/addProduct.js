const cloudinary = require("cloudinary").v2;
const Product = require("../models/productModels");

const isFileSupported = (supportedType, fileType) => {
  return supportedType.includes(fileType);
};

const uploadFileToCloudinary = async (file, folder) => {
  return await cloudinary.uploader.upload(file.tempFilePath, {
    folder,
  });
};

const addProduct = async (req, res) => {
  try {
    const { name, discount, price } = req.body;
    const image = req.files.file;
    if (!(name || price || image)) {
      res.status(401).json({
        success: false,
        message: "all fields required",
      });
    }

    //   file type validation
    const supportedType = ["jpg", "jpeg", "png"];
    const fileType = image.name.split(".")[1].toLowerCase();

    //   cheking file support
    if (!isFileSupported(supportedType, fileType)) {
      return res.status(400).json({
        success: false,
        message: "File type not supported",
      });
    }

    //  now file type supported
    // upload file to cloudinary
    const fileResponse = await uploadFileToCloudinary(image, "task");

    //   update data on database
    const dataResponse = await Product.create({
      name,
      discount,
      price,
      imageUrl: fileResponse.secure_url,
    });

    res.status(200).json({
      success: true,
      data: dataResponse,
      message: "File uploaded",
    });
  } catch (err) {
    console.log(err);
    console.log("Something went wrong");
  }
};

module.exports = addProduct;
