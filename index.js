const express = require("express");
const systemconfig = require("./config/system.js");
require("dotenv").config();

const app = express();
// 8 RETURN BODY
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());

// 7 đè phương thức
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// 2. dùng router
const routerClient = require("./router/client/index.router");
routerClient(app);
const routerAdmin = require("./router/admin/index.router");
routerAdmin(app);

// 3. dùng dotenv để quản lý biến môi trường - dong PORT trong file .env
const port = process.env.PORT;

//  4 static file - css, js, image
app.use(express.static("public"));

// 5 Mongoose - kết nối với mongodb qua file config/database.js
const database = require("./config/database");
database.connect();

// 6 locals Path Admin
app.locals.prefixAdmin = systemconfig.prefixAdmin;

//1. dùng pug làm view engine
app.set("views", "./views");
app.set("view engine", "pug");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
