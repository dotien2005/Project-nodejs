const express = require("express");
require("dotenv").config();
const app = express();

// 3. dùng dotenv để quản lý biến môi trường - dong PORT trong file .env
const port = process.env.PORT;

//  4 static file - css, js, image
app.use(express.static("public"));

// 5 Mongoose - kết nối với mongodb qua file config/database.js
const database = require("./config/database");
database.connect();
//1. dùng pug làm view engine
app.set("views", "./views");
app.set("view engine", "pug");

// 2. dùng router
const routerClient = require("./router/client/index.router");
routerClient(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
