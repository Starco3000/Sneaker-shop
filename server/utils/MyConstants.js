require ('./local.env');
const MyConstants = {
    DB_SERVER: process.env.DB_SERVER,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_DATABASE: process.env.DB_DATABASE,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES: process.env.JWT_EXPIRES, // in milliseconds
    EMAIL_USER: process.env.EMAIL_USER, // gmail service
    EMAIL_PASS: process.env.EMAIL_PASS
  };
  module.exports = MyConstants;