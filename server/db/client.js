import { Client } from "pg";

export const createClient = (options) => {
  const client = new Client();

  try {
    // Create posts table if it doesn't exists
    const createTable = `CREATE TABLE IF NOT EXISTS "posts" (
	    "id" SERIAL,
	    "name" VARCHAR(100) NOT NULL,
	    "role" VARCHAR(15) NOT NULL,
	    PRIMARY KEY ("id")
    );`
    client.query()

  } catch(err) {

  }

  return {
    query: (q, params) => client.query(q, params)
  }
}