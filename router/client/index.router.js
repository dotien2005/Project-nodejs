const ProuctRouter = require("./product.router");
const HomeRouter = require("./home.router");
module.exports = (app) => {
  app.use("/home", HomeRouter);
  app.use("/products", ProuctRouter);
};
