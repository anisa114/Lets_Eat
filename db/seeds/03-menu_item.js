
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('menu_item').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('menu_item').insert({
        name: 'Tuscan Pizza',
        price: '13.59',
        category_id: 1 ,
        description: "Marinara sauce, pizza mozzarella, cheddar, spicy chicken breast, roasted garlic, fresh spinach, sun-dried tomatoes and feta",
        image_url: "image"
        }),
        // Inserts seed entries
        knex('menu_item').insert({
          name: 'Baked Ravioli',
          price: '17.29',
          category_id: 2 ,
          description: "Delicious Pasta",
          image_url: "image"
          }),
      ]);
  });
};
