const mysql=require("mysql");
const createsqql=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Surajsah@97",
    database:"suraj",
    multipleStatements:true
})
createsqql.connect((err)=>{
    if(!err){console.log('connected')}
    else{console.log('connection failed')}
    });

// const knex = require('knex')({
//     client: 'mysql',
    // connection: {
    //   host : 'localhost',
    //   port : 3306,
    //   user : 'root',
    //   password : 'Surajsah@97',
    //   database : 'suraj'
//     }
//   });
table.string('name');
//   knex.schema.createTable('users', function (table) {
//     table.increments('id');
//     table.string('name');
//     table.password('password');
//     table.timestamps();
//   })
module.exports=createsqql;
