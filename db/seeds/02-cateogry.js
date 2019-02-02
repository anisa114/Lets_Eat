
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('categories').insert({name: 'Cold Pressed Juices'}),
        knex('categories').insert({name: 'Starters'}),
        knex('categories').insert({name: 'Tacos'}),
        knex('categories').insert({name: 'Burgers and Wraps'}),
        knex('categories').insert({name: 'Salads'}),
        knex('categories').insert({name: 'Desserts'}),
      ]);
    });
};
