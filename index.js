const express = require("express");
const app = express();
const port = 3000;

//1. dùng pug làm view engine
app.set("views", "./views");
app.set("view engine", "pug");

// 2. dùng router
const routerClient = require("./router/client/index.router");
routerClient(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
