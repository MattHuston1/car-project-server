
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {full_name: 'Matt Huston', 
        email: 'matthuston1@aol.com', 
        vehicle_make: 'Subaru', 
        model: 'Outback', 
        trim: 'Limited', 
        year: '2003'}
      ]);
    });
};
