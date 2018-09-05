
exports.up = function(knex, Promise) {
  return knex.schema.createTable('people', people => {
    people.increments()
    people.text('full_name')
    people.text('email')
    people.text('vehicle_make')
    people.text('model')
    people.text('trim')
    people.text('year')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('people')
};
