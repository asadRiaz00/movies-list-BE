const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "127.0.0.1", 
    port: 3306,
    user: "app_user", 
    password: "Password123!",
    database: "moviesDB",
      connectTimeout: 60000
    },
    listPerPage: 10,
  };
  module.exports = config;
