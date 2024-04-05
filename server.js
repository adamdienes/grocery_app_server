const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const API_TOKEN = process.env.API_TOKEN || '9sOlQBvayE';
const dbPath = './database.sqlite';

app.use(cors()); // CORS needed for all routes

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

// Middleware to check API token
const checkToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token || token !== `Bearer ${API_TOKEN}`) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};

app.use(checkToken);

// Initialize tables
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

// Route to get all products
app.get('/products', (req, res) => {
    db.all(`SELECT * FROM Products`, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Get product by barcode 
// MIN function is used to get the minimum value of boolean attributes (false < true)
// If any ingredient has false value for an attribute, the product is not safe to consume

app.get('/product/:barcode', (req, res) => {
    const barcode = req.params.barcode;
    db.get(`SELECT p.*, 
                    GROUP_CONCAT(i.name) AS ingredients,
                    MIN(i.isVegan) AS isVegan,
                    MIN(i.isGlutenFree) AS isGlutenFree,
                    MIN(i.isDairyFree) AS isDairyFree,
                    MIN(i.isNutFree) AS isNutFree,
                    MIN(i.isVegetarian) AS isVegetarian,
                    MIN(i.isHalal) AS isHalal,
                    MIN(i.isKosher) AS isKosher
            FROM Products p 
            LEFT JOIN ProductIngredients pi ON p.id = pi.productId
            LEFT JOIN Ingredients i ON pi.ingredientId = i.id
            WHERE p.barcode = ?
            GROUP BY p.id`, [barcode], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: 'Product not found (Barcode: ' + barcode + ')'});
        }
        
        if (row.ingredients) {
            row.ingredients = row.ingredients.split(',');
        } else {
            row.ingredients = [];
        }
        
        res.json(row);
    });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});
