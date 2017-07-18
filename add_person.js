const settings = require("./settings"); // settings.json
const knex = require("knex")({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

//prints out whole table.
// knex('famous_people').select('*').then(data => console.log(data));

//firstname and lastname
// knex('famous_people')
// .where('first_name', process.argv[2])
// .orWhere('last_name', process.argv[2])
// .then(data => console.log(data));

//insert 3 command line
knex('famous_people').insert({first_name: process.argv[2], last_name: process.argv[3], birthdate: process.argv[4]})
.then(data => console.log(data));
return knex.destroy();

