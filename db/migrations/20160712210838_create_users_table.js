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
  .createTable('orders', table => {
    table.increments('id').primary();
    table.bigInteger('ref_no');
    table.integer('ready_time');
    table.float('subTotal');
    table.float('salesTax');
    table.float('totalPrice');
    table.integer('user_id').references('id').inTable('users');
  })
  .createTable('categories', table => {
    table.increments('id').primary();
    table.string('name');
  })
  .createTable('menu_items', table => {
    table.increments('id').primary();
    table.string('name');
    table.float('price');
    table.integer('categories_id').references('id').inTable('categories');
    table.string('description');
    table.string('image_url');
  })
  .createTable('order_items', table => {
    table.increments('id').primary();
    table.integer('orders_id').references('id').inTable('orders');
    table.integer('menu_items_id').references('id').inTable('menu_items');
    table.string('name');
    table.string('description');
    table.float('price');
    table.integer("quantity");
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('order_items')
  .dropTable('orders')
  .dropTable('menu_items')
  .dropTable('categories')
  .dropTable('users')
};

  

