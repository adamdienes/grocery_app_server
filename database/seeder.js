module.exports.seedDatabase = function(db) {
    db.serialize(() => {
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
};