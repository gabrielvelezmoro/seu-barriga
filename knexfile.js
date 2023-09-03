module.exports = {
  test: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "velez_user",
      password: "123456",
      database: "velez_db",
    },
    migrations: {
      directory: "src/migrations",
    },
  },
};
