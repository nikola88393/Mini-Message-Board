const messages = require("../messages");
module.exports = {
  get: (req, res) => {
    res.render("newMessage", { title: "New message" });
  },
  post: (req, res) => {
    const text = req.body.text;
    const user = req.body.user;
    messages.push({ text: text, user: user, added: new Date() });
    res.redirect("/");
  },
};
