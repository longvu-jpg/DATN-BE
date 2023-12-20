const { Sequelize } = require('sequelize');
require('dotenv').config()

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    // process.env.DB_DATABASE_NAME,
    // process.env.DB_USERNAME,
    // process.env.DB_PASSWORD,
    'datn',
    'root',
    '123456',
    {

        // host: process.env.DB_HOST,
        // dialect: process.env.DB_DIALECT,
        // port: process.env.DB_PORT,
        // logging: false,
        // timezone: "+07:00"

        host: "localhost",
        dialect: "mysql",
        port: 3306,
        logging: false,
        timezone: "+07:00"
    });

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB