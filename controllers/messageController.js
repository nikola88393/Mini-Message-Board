const { messages, add } = require("../messages");
module.exports = {
  get: (req, res) => {
    res.render("newMessage", { title: "New message" });
  },
  post: (req, res) => {
    const text = req.body.text;
    const user = req.body.user;
    add(text, user);
    res.redirect("/");
  },
};
