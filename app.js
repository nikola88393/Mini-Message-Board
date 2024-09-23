const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRoute");
const messageRouter = require("./routes/messageRouter");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", messageRouter);

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
