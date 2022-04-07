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
    pool: {
      max: 3,
      min: 1,
      idle: 10000,
    },
    define: {
      timestamps: false,
      freezeTableName: true,
    },
    dialectOptions: {
      ssl: {
        require: true,
        // Ref.: https://github.com/brianc/node-postgres/issues/2009
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
    ssl: true,
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
  production: {
    username: `${DB_USERNAME}`,
    password: `${DB_PASSWORD}`,
    database: `${DB_NAME}`,
    host: `${DB_HOST}`,
    dialect: `${DB_DIALECT}`,
    port: 5432,
    logging: false,
    pool: {
      max: 3,
      min: 1,
      idle: 10000,
    },
    define: {
      timestamps: false,
      freezeTableName: true,
    },
    dialectOptions: {
      ssl: {
        require: true,
        // Ref.: https://github.com/brianc/node-postgres/issues/2009
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
    ssl: true,
  },
}
