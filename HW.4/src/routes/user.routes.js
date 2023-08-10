const express = require("express");
const routes = express.routes();

/** create user */
routes.post(
    "/create-user",
  );

  /** Get user list */
  routes.get(
    "/list",
  );


  module.exports = routes;