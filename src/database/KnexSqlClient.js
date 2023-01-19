const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'nikola',
      password : '1234',
      database : 'blog'
    }
  });


module.exports = { knex }