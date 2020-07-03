import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('challenges', (table) => {
    table.increments('id').primary();
    table.string('description').notNullable();
    table.string('option').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('challenges');
}
