const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'Surajsah@97',
      database : 'data'
    }
})

knex.schema.createTable('users_data', function (table) {
    table.increments('id').primary().unique();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.string('confirm_password').notNullable();
  }).then((data)=>{
      console.log("successfull created table");
  }).catch((err)=>{
      console.log("already exits table");
  })

module.exports=knex