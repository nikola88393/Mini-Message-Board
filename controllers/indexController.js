const db = require("../db/queries");
module.exports = {
  get: async (req, res) => {
    const messages = await db.getAll();
    res.render("index", { title: "Home", messages: messages });
  },
  getById: async (req, res) => {
    const id = req.params.id;
    // const message = messages.find((message) => message.id == id);
    const message = await db.getById(id);
    res.render("viewMessage", { message: message });
  },
  delete: async (req, res) => {
    const id = req.params.id;
    await db.deleteId(id);
    res.redirect("/");
  },
};
