const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "db4free.net",
      user: "moviesroot",
      password: "moviesroot",
      database: "moviesdb",
      connectTimeout: 60000
    },
    listPerPage: 10,
  };
  module.exports = config;