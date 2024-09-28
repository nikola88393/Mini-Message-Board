const { Router } = require("express");
const controller = require("../controllers/indexController");
const route = Router();

route.get("/", controller.get);
route.get("/:id([0-9]+)", controller.getById);
route.get("/delete/:id", controller.delete);

module.exports = route;
