const pool = require("./pool");

async function getAll() {
  const { rows } = await pool.query("SELECT * FROM messages");
  console.log(rows);
  return rows;
}

async function addMessage(text, user) {
  console.log(text, user);
  await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [
    text,
    user,
  ]);
  console.log("Added message");
}

async function getById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);

  return rows[0];
}

async function deleteId(id) {
  await pool.query("DELETE FROM messages WHERE id = $1", [id]);
}

module.exports = {
  getAll,
  addMessage,
  getById,
  deleteId,
};
