exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl.string("name", 255).notNullable();
    tbl.text("description");
    tbl.boolean("is_complete").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
