const { Router } = require("express");
const controller = require("../controllers/indexController");
const route = Router();

route.get("/", controller.get);
route.get("/:id([0-9]+)", controller.getById);

module.exports = route;
