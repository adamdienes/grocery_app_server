const express = require('express');
const router = express.Router();
const db = require('../database/database.js');

// Get all products
router.get('/products', (req, res) => {
    db.all(`SELECT * FROM Products`, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Get product by barcode 
router.get('/product/:barcode', (req, res) => {
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

module.exports = router;
