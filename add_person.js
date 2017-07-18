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
knex('famous_people')
.where('first_name', process.argv[2])
.orWhere('last_name', process.argv[2])
.then(data => console.log(data));
// OR .where('last_name', [process.argv[2]])
// , (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log(select '*' from `famous_people` where `id` = 1);



// knex.select('*').from('famous_people')
// connection.connect((err) => {
//   console.log(connection)
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   client.query("INSERT INTO famous_people (first_name, last_name, birthdate) VALUES ($1::text, $2::text, $3::text", [process.argv[2]], [process.argv[3]], [process.argv[4]], (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log("SELECT * FROM famous_people");
//     client.end();
//   });
// });
