
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 128)
        .notNullable();
      tbl.string('description', 128)
        .notNullable();
      tbl.boolean('status')
        .notNullable()
        .defaultTo('false');
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name', 128)
        .notNullable();
      tbl.string('description', 128)   
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description', 128)
        .notNullable();
      tbl.string('notes', 128)
      tbl.boolean('status')
        .defaultTo('false')
        .notNullable();
      tbl.integer('projects_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
    })
    .createTable('projects-resources', tbl => {
      tbl.primary(['projects_id', 'resources_id']);
      tbl.integer('projects_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects');
      tbl.integer('resources_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources');   
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};
