const express = require("express");
const router = express.Router();

const controler = require("../../controllers/client/users.controller");
router.get("/not-friend", controler.notFriend);

module.exports = router;
