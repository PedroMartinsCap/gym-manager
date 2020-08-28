const { Pool } = require("pg")

module.exports = new Pool({
  user: 'postgres',
  password: "2801dani",
  host: "localhost",
  port: 5432,
  database: "gymmanager"
})