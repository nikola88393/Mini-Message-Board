const { Router } = require("express");
const controller = require("../controllers/indexController");
const route = Router();

route.get("/", controller.get);

module.exports = route;
