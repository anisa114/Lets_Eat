
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
          // Inserts seed entries
          knex('users').insert(
            { first_name: 'John',
              last_name: 'Doe',
              phone_no: '6477748487',
              email: 'john.doe@gmail.com',
              password:'123',
              role: 'user'
        }),
        knex('users').insert(
          { first_name: 'Hannah',
            last_name: 'Montana',
            phone_no: '2897000872',
            email: 'hannahmontana@gmail.com',
            password:'321',
            role: 'owner'
        }),
      ]);
    });
};
