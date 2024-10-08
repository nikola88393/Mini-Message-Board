require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRoute");
const messageRouter = require("./routes/messageRouter");
const path = require("node:path");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", messageRouter);

app.use("*", (req, res) => [res.render("404", { title: "404" })]);

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
