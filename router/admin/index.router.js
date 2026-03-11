const dashboardRouter = require("./dashboard.router");
module.exports = (app) => {
  app.use("/", dashboardRouter);
};
