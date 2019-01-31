
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('category').insert({name: 'Pizza'}),
        knex('category').insert({name: 'Pasta'}),
      ]);
    });
};
