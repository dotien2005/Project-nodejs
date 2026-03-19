const express = require("express");
const router = express.Router();

const controler = require("../../controllers/admin/products.controller");

router.get("/", controler.index);
router.patch("/change-status/:status/:id", controler.changeStatus);

module.exports = router;
