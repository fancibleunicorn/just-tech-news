const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // define an id column
        id: {
            // use the special Sequalize DataTypes object to provide what type of data it is
            type: DataTypes.INTEGER,
            // this is the quivalent of SQL's NOT NULL option
            allowNull: false,
            // instruct that this is the Primary Key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        // define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define an email column 
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // there cannot be any duplicate email values in this table
            unique: true,
            // if allowNull is set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        // define a pasword column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // this menas the password must be at least four characters long
                len: [4]
            }
        }
    },
    {
        // Table configuration options go here

        // pass in our imported sequlize connection to database
        sequelize,
        //don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing
        underscored: true,
        // make it so model name stays lowercase in database
        modelName: 'user'
    }
);

module.exports = User;