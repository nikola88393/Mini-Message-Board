const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRoute");
const messageRouter = require("./routes/messageRouter");

app.use("/", indexRouter);
app.use("/new", messageRouter);

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
