// import the Sequelize constructor and dotenv from the library
const Sequelize = require('sequelize');

require('dotenv').config();


// create connection to our database, pass your MYSQL information for username and password
let sequelize;

if(process.env.JAWS_URL) {
    sequelize = new Sequelize(process.env.JAWS_URL);
} else {
    new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
 }

module.exports =sequelize;