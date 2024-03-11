const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());

// middleware
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/temp/",
  })
);

// mount routes
const router = require("./routes/routes");
app.use("/api/v1/", router);

// database connection
const dbConnect = require("./config/database");
dbConnect();

// config cloudinary
const cloudinaryConfig = require("./config/cloudinary");
cloudinaryConfig();

// listing routes
app.listen(port, () => {
  console.log("server started", port);
});

// default routes
app.get("/", (req, res) => {
  res.send("task project");
});
