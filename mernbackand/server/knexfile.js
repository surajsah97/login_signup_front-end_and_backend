// Update with your config settings.
require('dotenv').config();
module.exports = {
  development: {
    client: "mysql",
    connection: {
      host : 'localhost',
      port :process.env.PORT || 3001,
      user : 'root',
      password : 'Surajsah@97',
      database : 'sunlight'
  }
  },debug: true,
  pool: {
    "min": 2,
    "max": 6,
    "createTimeoutMillis": 3000,
    "acquireTimeoutMillis": 30000,
    "idleTimeoutMillis": 30000,
    "reapIntervalMillis": 1000,
    "createRetryIntervalMillis": 100,
    "propagateCreateError": false // <- default is true, set to false
  },
  migrations: {
    directory: __dirname + '/knex/migrations',
  },
  seeds: {
    directory: __dirname + '/knex/seeds',
  },

};
