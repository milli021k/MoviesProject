const path = require("path");

require("dotenv").config();

const {
  DATABASE_URL = "postgres://fqdlhmqf:n9lzII5HbF0oU3BziiwHMpu9l2YfkJi4@queenie.db.elephantsql.com:5432/fqdlhmqf",
  DEVELOPMENT_DATABASE_URL,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DEVELOPMENT_DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
