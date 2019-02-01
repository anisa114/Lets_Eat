
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('categories').insert({name: 'Pizza'}),
        knex('categories').insert({name: 'Pasta'}),
        knex('categories').insert({name: 'Burgers and Sandwiches'}),
        knex('categories').insert({name: 'Mains'}),
      ]);
    });
};
