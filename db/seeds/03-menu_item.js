
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('menu_items').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('menu_items').insert({
          name: 'Baked Ravioli',
          price: '17.29',
          categories_id: 2 ,
          description: "Delicious Pasta",
          image_url: "image"
        }),
        knex('menu_items').insert({
          name: 'Chipotle Bacon Penne',
          price: '17.29',
          categories_id: 2 ,
          description: "Bacon, mushrooms, green onions, tomatoes, cheddar, chipotle seasoning and Alfredo sauce, baked with cheddar and pizza mozzarella.",
          image_url: "image"
        }),
        knex('menu_items').insert({
          name: 'Jambalaya Fettuccini',
          price: '18.99',
          categories_id: 2 ,
          description: "Chicken breast, shrimp, spicy Italian sausage, tomatoes, green peppers, green onions, Cajun seasoning and marinara sauce.",
          image_url: "image"
          }),
        knex('menu_items').insert({
          name: 'Smokey Mountain Spaghetti and Meatballs',
          price: '19.29',
          categories_id: 2 ,
          description: "A generous serving of spaghetti, beefy Bolognese sauce, meatballs and cheddar.",
          image_url: "image"
        }),
      
        knex('menu_items').insert({
          name: 'Tuscan Pizza',
          price: '13.59',
          categories_id: 1 ,
          description: "Marinara sauce, pizza mozzarella, cheddar, spicy chicken breast, roasted garlic, fresh spinach, sun-dried tomatoes and feta",
          image_url: "image"
        }),
      knex('menu_items').insert({
          name: 'Spicy Perogy',
          price: '13.79',
          categories_id: 1 ,
          description: "Sour cream, bacon, Cactus Cut Potatoes, pizza mozzarella, cheddar, green onions and a dollop of sour cream.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Boston Royal',
          price: '13.79',
          categories_id: 1 ,
          description: "Signature pizza sauce, pizza mozzarella, smoked ham, pepperoni, shrimp, olives, green peppers, onions and fresh mushrooms.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'The Meateor',
          price: '13.79',
          categories_id: 1 ,
          description: "Beefy Bolognese sauce, pizza mozzarella, smoked ham, pepperoni, seasoned ground beef and spicy Italian sausage.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Mediterranean Chicken Wrap',
          price: '14.99',
          categories_id: 3 ,
          description: "Grilled chicken, Kalamata olives, feta, tomatoes, red peppers, cucumbers, lettuce, red onions, tomato tarragon dressing and hummus.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'The Big Dipper',
          price: '16.79',
          categories_id: 3 ,
          description: "Sliced steak, braised onions, roasted red peppers, pizza mozzarella and crispy onion straws. Served with horseradish mayo and au jus.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Boston Brute',
          price: '13.69',
          categories_id: 3 ,
          description: "Genoa salami, pepperoni, smoked ham, pizza mozzarella, onions and our signature pizza sauce.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Chipotle Chicken Club',
          price: '15.49',
          categories_id: 3 ,
          description: "Grilled chicken breast, bacon, cheddar, pizza mozzarella, tomatoes, lettuce and chipotle Caesar sauce served on pizza bread.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Ribber-Winger Combo',
          price: '24.99',
          categories_id: 4 ,
          description: "A half rack of ribs paired with six of our famous wings. Choose any type of wing and flavour.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'NY Striploin Steak',
          price: '17.29',
          categories_id: 4 ,
          description: "Canadian 8-ounce AAA New York strip loin steak, aged a minimum of 28 days and charbroiled the way you like it.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Chicken Parmesan',
          price: '19.69',
          categories_id: 4 ,
          description: "A fried buttermilk-breaded chicken breast, topped with our marinara sauce and pizza mozzarella.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Slow-Roasted Pork Back Ribs',
          price: '17.99',
          categories_id: 4 ,
          description: "Slow-roasted pork back ribs tossed in your choice of sauce.",
          image_url: "image"
          }),
      ]);
  });
};
