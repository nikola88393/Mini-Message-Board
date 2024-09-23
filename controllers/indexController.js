const { messages } = require("../messages");
module.exports = {
  get: (req, res) => {
    res.render("index", { title: "Home", messages: messages });
  },
  getById: (req, res) => {
    const id = req.params.id;
    const message = messages.find((message) => message.id == id);
    res.render("viewMessage", { message: message });
  },
};
