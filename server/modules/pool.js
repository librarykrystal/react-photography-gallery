const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'react_gallery', 
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log('Pool connection success.');
});

pool.on('error', (error) => {
    console.log('Pool connection error:', error);
});


module.exports = pool;