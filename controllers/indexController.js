const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Welcome!",
    user: "Alex",
    added: new Date(),
  },
  {
    text: "Good so see you!",
    user: "Tyrone",
    added: new Date(),
  },
];
module.exports = {
  get: (req, res) => {
    res.render("index", { title: "Home", messages: messages });
  },
};
