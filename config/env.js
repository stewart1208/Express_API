require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  USERNAME : 'expressApi',
  PASSWORD : 'express@Api',
  MONGODB_URI: 'mongodb://localhost:27017/express_api'
}