const express = require("express");
const router = express.Router();

const controler = require("../../controllers/admin/products.controller");

router.get("/", controler.index);
router.patch("/change-status/:status/:id", controler.changeStatus);
router.patch("/change-multi", controler.changeMulti);

module.exports = router;
