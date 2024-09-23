const { Router } = require("express");
const controller = require("../controllers/messageController");
const route = Router();

route.get("/", controller.get);

module.exports = route;
