const express = require("express");
const router = express.Router();

// controller
const addProduct = require("../controller/addProduct");
const getAll = require("../controller/getAll");

// defining routes
router.post("/addProduct", addProduct);
router.get("/getAll", getAll);

module.exports = router;
