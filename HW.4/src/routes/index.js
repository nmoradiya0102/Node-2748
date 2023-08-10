const express = require("express");
const userroutes = require("./user.routes");

const routes = express.routes();
routes.use("/user",userroutes);
module.exports = routes;
