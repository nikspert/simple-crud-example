/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('articles', function (table) {
       table.increments('id');
       table.string('name');
       table.string('text');
       table.integer('author').unsigned().notNullable()
         .references('id').inTable('users');
       table.timestamps(true, true);
     })
   };
   
   /**
    * @param { import("knex").Knex } knex
    * @returns { Promise<void> }
    */
   exports.down = function(knex) {
     return knex.schema.dropTableIfExists('articles')
   };
   