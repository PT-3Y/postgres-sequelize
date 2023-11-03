module.exports = {
  DBTYPE:"postgresql",
  HOST: 'localhost',
  USER: "username",
  PASSWORD: "your password",
  DB: "postgresqlDB",
  SID:'postgresql',  
  dialect: "postgresql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
