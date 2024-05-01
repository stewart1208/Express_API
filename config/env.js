require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  USERNAME : 'expressApi',
  PASSWORD : 'express@Api',
  MONGODB_URI: `mongodb+srv://${this.USERNAME}:${this.PASSWORD}@expressapi.cr149ca.mongodb.net/?retryWrites=true&w=majority&appName=ExpressApi`
}