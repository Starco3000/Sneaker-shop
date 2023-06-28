require ('dotenv').config();

const MyConstants = {
    db_server: process.env.DB_SERVER,
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASS,
    db_database: process.env.DB_DATABASE,
    jwt_secret: process.env.JWT_SECRET,
    jwt_expires: process.env.JWT_EXPIRES, // in milliseconds
    email_user: process.env.EMAIL_USER, // gmail service
    email_pass: process.env.EMAIL_PASS
  };
  module.exports = MyConstants;