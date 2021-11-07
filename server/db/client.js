const { Client } = require("pg");

const createClient = (options) => {
  const client = new Client({ssl: { rejectUnauthorized: false }});
  
    client.connect().then(res => {
      console.log("Init client")
      const createTable = `CREATE TABLE IF NOT EXISTS "posts" (
        "id" SERIAL,
        "img" VARCHAR(64) NOT NULL,
        "title" VARCHAR(64) NOT NULL,
        "body" TEXT NOT NULL,
        PRIMARY KEY ("id")
      );`
      client.query(createTable)
    }).catch(err => console.log(err))

  return client
}

exports.createClient = createClient;
