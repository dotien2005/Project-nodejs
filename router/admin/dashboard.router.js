const express = require("express");
const router = express.Router();

const controler = require("../../controllers/admin/dashboard.controller");

router.get("/", controler.dashboard);

module.exports = router;
