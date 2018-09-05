module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/car_project'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
