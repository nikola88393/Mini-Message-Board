const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(255), 
    username VARCHAR(255), 
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username)
VALUES
  ('Hello from Bryan', 'Bryan'),
  ('Hello from Odin', 'Odin'),
  ('Hello from Damon', 'Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://nikola:nikimiho2@localhost:5432/messages",
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
