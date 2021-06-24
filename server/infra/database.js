//vamos utilizar a conexão já existente com o bd

//biblioteca utilizada para realizar a conexão com o postgres
const pgp = require('pg-promise')();
//instanciar o baco de dados {passando um objeto de conexão}
const db = pgp({
    user: 'postgres',
    password: 'postgre123',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
});

module.exports = db;
