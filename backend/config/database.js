const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("database connected"))
    .catch((err) => {
      console.log(err);
      console.log("Database connection failed");
    });
};

module.exports = dbConnect;
