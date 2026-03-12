const express = require("express");
const router = express.Router();

const controler = require("../../controllers/admin/products.controller");

router.get("/", controler.index);

module.exports = router;
