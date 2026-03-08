const express = require("express");
const app = express();

// 3. dùng dotenv để quản lý biến môi trường - dong PORT trong file .env
require("dotenv").config();
const port = process.env.PORT;

//1. dùng pug làm view engine
app.set("views", "./views");
app.set("view engine", "pug");
//  4 static file - css, js, image
app.use(express.static("public"));

// 2. dùng router
const routerClient = require("./router/client/index.router");
routerClient(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
