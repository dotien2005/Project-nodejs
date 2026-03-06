const express = require("express");
const router = express.Router();

const controler = require("../../controllers/client/product.controller");

router.get("/", controler.product);

module.exports = router;
