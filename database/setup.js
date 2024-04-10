module.exports.setupDatabase = function(db) {
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
    });
};