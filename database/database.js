require('dotenv').config()

const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const dbPath = process.env.DB_PATH;
const { setupDatabase } = require('./setup.js');
const { seedDatabase } = require('./seeder.js');

if (fs.existsSync(dbPath)) {
    try {
        fs.unlinkSync(dbPath);
        console.log('Deleted existing SQLite file');
    } catch (err) {
        console.error('Error deleting existing SQLite file:', err.message);
    }
}

const database = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the new database');
    }
});

setupDatabase(database);
seedDatabase(database);

module.exports = database;