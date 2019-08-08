const express = require("express");

const routes = express.Router();
const controllers = require("./app/controllers");

routes.get("/tools", controllers.ToolController.index);
routes.post("/tools", controllers.ToolController.store);

module.exports = routes;
