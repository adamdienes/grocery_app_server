const express = require('express');
const router = express.Router();
const db = require('../database/database.js');

// Get all products
router.get('/products', (req, res) => {
    db.all(`SELECT p.*, GROUP_CONCAT(i.name, ', ') AS ingredients
            FROM Products p
            LEFT JOIN ProductIngredients pi ON p.id = pi.productId
            LEFT JOIN Ingredients i ON pi.ingredientId = i.id
            GROUP BY p.id`, (err, rows) => {
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
                    MIN(i.isCeleryFree) AS isCeleryFree,
                    MIN(i.isGlutenFree) AS isGlutenFree,
                    MIN(i.isCrustaceansFree) AS isCrustaceansFree,
                    MIN(i.isEggFree) AS isEggFree,
                    MIN(i.isFishFree) AS isFishFree,
                    MIN(i.isLupinFree) AS isLupinFree,
                    MIN(i.isDairyFree) AS isDairyFree,
                    MIN(i.isMolluscFree) AS isMolluscFree,
                    MIN(i.isMustardFree) AS isMustardFree,
                    MIN(i.isPeanutFree) AS isPeanutFree,
                    MIN(i.isSesameFree) AS isSesameFree,
                    MIN(i.isSoyfree) AS isSoyfree,
                    MIN(i.isSulphurdioxideFree) AS isSulphurdioxideFree,
                    MIN(i.isTreenutFree) AS isTreenutFree,
                    MIN(i.isPaleo) AS isPaleo,
                    MIN(i.isVegan) AS isVegan,
                    MIN(i.isVegetarian) AS isVegetarian,
                    MIN(i.isAddedSugarFree) AS isAddedSugarFree
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
