let id = 4;

module.exports = {
  messages: [
    {
      id: 0,
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
    },
    {
      id: 1,
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
    },
    {
      id: 2,
      text: "Welcome!",
      user: "Alex",
      added: new Date(),
    },
    {
      id: 3,
      text: "Good so see you!",
      user: "Tyrone",
      added: new Date(),
    },
  ],
  add: (text, user) => {
    module.exports.messages.push({
      id: id,
      text: text,
      user: user,
      added: new Date(),
    });
    id++;
  },
};
