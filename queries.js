const database = require('./database-connection')

module.exports = {
  list() {
    return database('people').select('*')
},

read(id) {
    return database('people').select('*').where('id', id).first()
},

create(people) {
    return database('people').insert(people).returning('*')
        .then(record => record)
},

update(id, people) {
    return database('people').update(people).where('id', id).returning('*')
        .then(record => record[0])
},

delete(id) {
    return database('people').delete().where('id', id)
},
}