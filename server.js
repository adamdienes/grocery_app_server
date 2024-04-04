const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL database connection
const connection = mysql.createConnection({
    host: '185.111.89.207', // Change this to your MySQL host
    user: 'adamdien_grocery', // Change this to your MySQL username
    password: 'reparetekmogyoro', // Change this to your MySQL password
    database: 'adamdien_grocery' // Change this to your MySQL database name
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Middleware to parse JSON bodies
app.use(express.json());

// API password
const apiPassword = 'your_api_password'; // Change this to your desired API password

// Middleware to check API authentication
const authenticateAPI = (req, res, next) => {
    const password = req.headers['x-api-password'] || req.body.apiPassword;
    if (!password || password !== apiPassword) {
        return res.status(401).json({ error: 'Unauthorized. Invalid API password.' });
    }
    next();
};

// Apply authentication middleware to all routes
app.use(authenticateAPI);

// Routes
app.get('/items', (req, res) => {
    connection.query('SELECT * FROM items', (error, results, fields) => {
        if (error) {
            console.error('Error executing MySQL query: ', error);
            res.status(500).json({ error: 'Error fetching items from database' });
            return;
        }
        res.json(results);
    });
});

app.post('/items', (req, res) => {
    const { name, price } = req.body;
    connection.query('INSERT INTO items (name, price) VALUES (?, ?)', [name, price], (error, results, fields) => {
        if (error) {
            console.error('Error executing MySQL query: ', error);
            res.status(500).json({ error: 'Error inserting item into database' });
            return;
        }
        res.json({ message: 'Item inserted successfully', itemId: results.insertId });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});