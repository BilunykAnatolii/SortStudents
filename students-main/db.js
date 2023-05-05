const Pool = require('pg').Pool
const pool = new Pool({
    user:'ukd_student',
    password:'password',
    database: 'ukd_db',
    host: 'localhost',
    port: 12611
})
module.exports = pool