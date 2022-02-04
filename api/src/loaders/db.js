const { Pool } = require("pg");

const connectDB = async () => {
  await new Pool({
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_DATABASE || "todoDB",
  });
};

module.exports = { connectDB };
