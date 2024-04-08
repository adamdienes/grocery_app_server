const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
require('dotenv').config()
const dbPath = process.env.DB_PATH;

// Delete existing SQLite file and create new one
if (fs.existsSync(dbPath)) {
    try {
        fs.unlinkSync(dbPath);
        console.log('Deleted existing SQLite file');
    } catch (err) {
        console.error('Error deleting existing SQLite file:', err.message);
    }
}

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the new database');
    }
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Products (
        id INTEGER PRIMARY KEY,
        name TEXT,
        description TEXT,
        image_url TEXT,
        barcode TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS Ingredients (
        id INTEGER PRIMARY KEY,
        name TEXT,
        isVegan BOOLEAN,
        isGlutenFree BOOLEAN,
        isDairyFree BOOLEAN,
        isNutFree BOOLEAN,
        isVegetarian BOOLEAN,
        isHalal BOOLEAN,
        isKosher BOOLEAN
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS ProductIngredients (
        productId INTEGER,
        ingredientId INTEGER,
        FOREIGN KEY(productId) REFERENCES Products(id),
        FOREIGN KEY(ingredientId) REFERENCES Ingredients(id)
    )`);

    // Mock-up data 
    // TODO: Add more relevant data
    db.run(`INSERT INTO Products (name, description, barcode, image_url) VALUES (?, ?, ?, ?)`, ['Product 1', 'Lorem ipsum', '1122', 'https://picsum.photos/200'], (err) => {
        if (err) {
            console.error('Error inserting product:', err.message);
        }
    });

    db.run(`INSERT INTO Products (name) VALUES ('Product 2')`, (err) => {
        if (err) {
            console.error('Error inserting product:', err.message);
        }
    });

    // Inserting an ingredient with boolean values
    // TODO: Add all boolean attributes (isDairyFree, etc.)
    db.run(`INSERT INTO Ingredients (name, isVegan, isGlutenFree) VALUES (?, ?, ?)`, ['Tej', 1, 1], (err) => {
        if (err) {
            console.error('Error inserting ingredient:', err.message);
        }
    });

    // Inserting an ingredient with boolean values
    db.run(`INSERT INTO Ingredients (name, isVegan, isGlutenFree) VALUES (?, ?, ?)`, ['Sajt', 1, 0], (err) => {
        if (err) {
            console.error('Error inserting ingredient:', err.message);
        }
    });

    db.run(`INSERT INTO Ingredients (name) VALUES ('Ingredient B')`, (err) => {
        if (err) {
            console.error('Error inserting ingredient:', err.message);
        }
    });

    // N-N relationship
    // TODO: Add more real relationships
    db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (1, 1)`, (err) => {
        if (err) {
            console.error('Error establishing relationship:', err.message);
        }
    });

    db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (1, 2)`, (err) => {
        if (err) {
            console.error('Error establishing relationship:', err.message);
        }
    });
});

module.exports = db;
