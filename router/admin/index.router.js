const dashboardRouter = require("./dashboard.router");
module.exports = (app) => {
  const PATH_ADMIN = "/admin";
  app.use(PATH_ADMIN + "/dashboard", dashboardRouter);
};
