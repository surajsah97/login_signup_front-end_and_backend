require('dotenv').config();
const env = process.env.environment || 'development'
const config = require('../knexfile.js')[env];
const knex = require('knex')(config);

module.exports = knex;
