
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('menu_items').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('menu_items').insert({
          name: 'Buffalo Cauliflower',
          price: '12.99',
          categories_id: 2 ,
          description: "Spicy buffalo sauce, ranch, hemp, and celery.",
          image_url: "image"
        }),
        knex('menu_items').insert({
          name: 'Dragon Brocolli',
          price: '8.49',
          categories_id: 2 ,
          description: "Broccoli, miso gravy, banana chilies, scallions, sesame seeds, and chili oil.",
          image_url: "image"
        }),
        knex('menu_items').insert({
          name: 'French Fries',
          price: '6.99',
          categories_id: 2 ,
          description: "Hand cut, tossed with sea salt.",
          image_url: "image"
          }),
        knex('menu_items').insert({
          name: 'Dragon Fries',
          price: '9.49',
          categories_id: 2 ,
          description: "Miso gravy, banana chilies, scallions, sesame seeds, and chili oil.",
          image_url: "image"
        }),
      
        knex('menu_items').insert({
          name: 'The Healer',
          price: '11.99',
          categories_id: 1 ,
          description: "Turmeric root, ginger, orange, pineapple, celery and lemon",
          image_url: "image"
        }),
      knex('menu_items').insert({
          name: 'Raw Ginger Shot',
          price: '3.99',
          categories_id: 1 ,
          description: "Ginger",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Apple Ginger Glow',
          price: '11.99',
          categories_id: 1 ,
          description: "Apple, extra ginger and lemon.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Immunity Power Shot',
          price: '6.49',
          categories_id: 1 ,
          description: "Ginger, lemon, grapefruit, garlic, Himalayan pink salt, echinacea, oregano oil.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Crispy Cauliflower Tacos',
          price: '12.99',
          categories_id: 3 ,
          description: "Jicama, avocado, garlic mayonnaise, napa cabbage, beet sauerkraut, and lemon.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Falafel Tacos',
          price: '12.99',
          categories_id: 3 ,
          description: "Green falafel, red cabbage, tahini, zhug, amba, crispy onions, and tomato.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Grilled Tofu Tacos',
          price: '10.99',
          categories_id: 3 ,
          description: "Tofu steaks, power greens, jalapeno/lime sauce, tomato, onion, and cilantro.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Squash Tacos',
          price: '12.99',
          categories_id: 3 ,
          description: "Crispy panko squash, power greens, jalapeno/lime sauce, tomato, onion, and cilantro.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Banquet Burger',
          price: '14.99',
          categories_id: 4 ,
          description: "Tempeh bacon, fresh 'cheese' sauce, garlic mayo, pickles, alfalfa, lettuce, tomato, and red onion.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'BBQ Burger',
          price: '14.99',
          categories_id: 4 ,
          description: "BBQ sauce, quinoa onion rings, garlic mayonnaise, napa cabbage, banana chilies, tomato, and lettuce.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Chipotle Mushroom Bacon Burger',
          price: '14.99',
          categories_id: 4 ,
          description: "Chipotle mayonnaise, tempeh bacon, mushrooms, tomato, lettuce, and alfalfa.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'All Star',
          price: '16.99',
          categories_id: 5 ,
          description: "Quinoa, power greens, marinated adzuki, goji, heirloom grape tomatoes, cucumber, mixed nuts, parsley, cilantro, sunflower sprouts, sweet potato, tofu steaks, and choice of dressing.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Flying Cashew Burger',
          price: '14.99',
          categories_id: 4 ,
          description: "Avocado, quick pickled yellow beets, garlic mayonnaise, red cabbage, carrot, and cashew cheese.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Big Salad',
          price: '10.99',
          categories_id: 5 ,
          description: "Avocado, red pepper, tomato, carrot, cucumber, hemp, lettuce, and choice of dressing.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Detox Caesar',
          price: '13.99',
          categories_id: 5 ,
          description: "Power greens, brazil nut parmesan, tempeh bacon, sun-dried tomatoes, flowers, lemon, and Caesar dressing.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Monster Protein Salad',
          price: '17.99',
          categories_id: 5 ,
          description: "Tempeh, tofu cubes, avocado,_chick peas, cranberries, marinated adzuki, red cabbage, cucumber, heirloom grape tomatoes, watermelon seeds, lettuce, and choice of dressing.",
          image_url: "image"
          }),     
      knex('menu_items').insert({
          name: 'Birthday Cake Donut',
          price: '4.75',
          categories_id: 6 ,
          description: "Awesome birthday cake donut!",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Carrot Cake',
          price: '7.99',
          categories_id: 6 ,
          description: "Baked inhouse, made with real carrots.",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Chocolate Chip Cookie',
          price: '2.99',
          categories_id: 6 ,
          description: "Chocolatey, decadent and moist chocolate chip cookie",
          image_url: "image"
          }),
      knex('menu_items').insert({
          name: 'Smores Cookie',
          price: '2.99',
          categories_id: 6 ,
          description: "Chocolate chip cookie with added soft marshmellows for the perfect combination.",
          image_url: "image"
          }),
      ]);
  });
};
