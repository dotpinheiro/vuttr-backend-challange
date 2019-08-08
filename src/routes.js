const express = require("express");

const routes = express.Router();
const controllers = require("./app/controllers");
const middlewares = require("./app/middlewares");

routes.post("/signup", controllers.UserController.store);
routes.post("/login", controllers.SessionController.store);

/* Authorization routes */
routes.use(middlewares.auth);
routes.get("/tools", controllers.ToolController.index);
routes.post("/tools", controllers.ToolController.store);
routes.put("/tools/:id", controllers.ToolController.update);
routes.delete("/tools/:id", controllers.ToolController.destroy);

module.exports = routes;
