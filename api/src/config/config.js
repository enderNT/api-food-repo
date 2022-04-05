const fs = require('fs')
require('dotenv').config()

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_DIALECT
} = process.env

module.exports = {
  development: {
    username: `${DB_USERNAME}`,
    password: `${DB_PASSWORD}`,
    database: `${DB_NAME}`,
    host: `${DB_HOST}`,
    dialect: `${DB_DIALECT}`,
    port: 5432,
    logging: false,
    define: {
      timestamps: false,
      freezeTableName: true,
    }
  },
  "test": {
    username: `${DB_USERNAME}`,
    password: `${DB_PASSWORD}`,
    database: `${DB_NAME}`,
    host: `${DB_HOST}`,
    dialect: `${DB_DIALECT}`,
    logging: false,
    define: {
      timestamps: false,
      freezeTableName: true,
    }
  },
  "production": {
    username: `${DB_USERNAME}`,
    password: `${DB_PASSWORD}`,
    database: `${DB_NAME}`,
    host: `${DB_HOST}`,
    dialect: `${DB_DIALECT}`,
    logging: false,
    define: {
      timestamps: false,
      freezeTableName: true,
    }
  },
}
