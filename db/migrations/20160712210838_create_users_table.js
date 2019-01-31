exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('first_name');
    table.string('last_name');
    table.bigInteger('phone_no');
    table.string('email');
    table.string('password');
    table.string('role');
  })
  .createTable('order', table => {
    table.increments('id').primary();
    table.bigInteger('ref_no');
    table.integer('ready_time');
    table.integer('user_id').references('id').inTable('users');
  })
  .createTable('category', table => {
    table.increments('id').primary();
    table.string('name');
  })
  .createTable('menu_item', table => {
    table.increments('id').primary();
    table.string('name');
    table.float('price');
    table.integer('category_id').references('id').inTable('category');
    table.string('description');
    table.string('image_url');
  })
  .createTable('order_items', table => {
    table.increments('id').primary();
    table.integer('order_id').references('id').inTable('order');
    table.integer('menu_item_id').references('id').inTable('menu_item');
    table.string('name');
    table.float('price');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('order_items')
  .dropTable('order')
  .dropTable('menu_item')
  .dropTable('category')
  .dropTable('users')
};

  

