/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("GF_food", (table) => {
    table.increments("id").primary();
    table.string("food-name", 32).notNullable();
    table.decimal("quantity", 8, 2).notNullable();
    table.string("quantity-unit", 8).notNullable();
    table.date("registration-date").notNullable();
    table.date("expiration-date");
    table.string("login-id_f", 32).notNullable().unsigned();

    table.foreign("login-id_f").references("GF_userInfo.login-id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable("GF_food");
};
