const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "super1234",
    host: "localhost",
    port: 5432,
    database: "pern_todo"
});

module.export = pool;