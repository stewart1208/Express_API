require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  USERNAME : process.env.USERNAME,
  PASSWORD : process.env.PASSWORD,
  MONGODB_URI:  'mongodb://localhost:27017/express_api'
}