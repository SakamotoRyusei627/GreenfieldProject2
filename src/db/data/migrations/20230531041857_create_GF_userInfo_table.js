/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("GF_userInfo", (table) => {
    table.string("login-id", 32).primary();
    table.string("password", 16).notNullable();
    table.string("first-name", 16).notNullable();
    table.string("last-name", 16).notNullable();
    table.date("birthday").notNullable();
    table.string("gender", 1);
    table.string("refrigerator", 64).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable("GF_userInfo");
};
