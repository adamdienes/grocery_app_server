// Run: mocha test/database.test.js
import dotenv from 'dotenv';
import { expect } from 'chai';
import sqlite3 from 'sqlite3';
import fs from 'fs';

dotenv.config();

describe('Database Setup', function() {
    it('should create a new database file', function() {
        const dbPath = process.env.DB_PATH;
        console.log('dbPath:', dbPath);
        if (fs.existsSync(dbPath)) {
            fs.unlinkSync(dbPath);
        }
        
        const database = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                done(err);
            } else {
                console.log('Database setup completed');
                expect(fs.existsSync(dbPath)).to.true;
            }
        });
    });

    it('should connect to the database', function(done) {
        const dbPath = process.env.DB_PATH;
        const database = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                done(err);
            } else {
                expect(database).to.be.an('object');
                done(); 
            }
        });
    });
});
