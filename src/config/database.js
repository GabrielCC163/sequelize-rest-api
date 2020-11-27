module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "sqlnode",
  define: {
    timestamps: true, //created_at, updated_at
    underscored: true,
  },
};
