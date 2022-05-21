const { DATABASE_URL, NODE_ENV } = require('./env')

module.exports = {
  dialect: 'postgres',
  url: DATABASE_URL,
  dialectOptions: {
    ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  },
}
