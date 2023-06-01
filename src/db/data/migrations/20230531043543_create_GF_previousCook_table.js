/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable("GF_previousCook", (table) => {
        table.increments('id').primary();
        table.string("dishes",64).notNullable();
        table.date("cooking-date").notNullable();
        table.string("login-id_p",32).notNullable().unsigned();

        table.foreign("login-id_p").references("GF_userInfo.login-id");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable("GF_previousCook");  
};
