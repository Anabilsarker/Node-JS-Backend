const mysql = require('mysql');
const config = require('../../config');

// MySQL connection setup
const db = mysql.createConnection(config.db);

// Function to handle the connection as a Promise
function initializeDB() {
    return new Promise((resolve, reject) => {
        db.connect(err => {
            if (err) {
                console.error('Error connecting to MySQL:', err);
                reject(err);  // Reject the promise if there is an error
            } else {
                console.log('MySQL connected...');
                resolve();  // Resolve the promise when connection is successful
            }
        });
    });
}

// async function that uses the connectDB function
async function connectDB() {
    try {
        await initializeDB();  // Waiting for the database connection to succeed
        console.log('Database connection successfully established');
        // You can perform further database operations here
    } catch (err) {
        console.error('Failed to connect to the database:', err);
        process.exit(1);  // Exit the application if the database connection fails
    }
}

// Function to execute SQL query
function query(sql, params) {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = { connectDB, query };