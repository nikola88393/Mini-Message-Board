const db = require("../db/queries");

module.exports = {
  get: (req, res) => {
    res.render("newMessage", { title: "New message" });
  },
  post: async (req, res) => {
    const text = req.body.text;
    const user = req.body.user;
    // add(text, user);
    await db.addMessage(text, user);
    res.redirect("/");
  },
};
