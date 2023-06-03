/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  migrations: {
    directory: "./data/migrations",
  },
  seeds: { directory: "./data/seeds" },
  development: {
    client: "pg",
    connection: {
      database: "gf",
      user: "user",
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
  },
};
