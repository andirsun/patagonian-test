const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  dialect: process.env.DB_DIALECT,
  database: process.env.DB_DATABASE,
  storage: process.env.DB_STORAGE,
  host: process.env.DB_HOST,
  migrationStorageTableName: 'sequelize_meta',
};
