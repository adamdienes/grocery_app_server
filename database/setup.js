module.exports.setupDatabase = function(db) {
    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS Products (
            id INTEGER PRIMARY KEY,
            barcode TEXT UNIQUE,
            name TEXT,
            description TEXT,
            image_url TEXT
        )`);

        //Consumers may be allergic or have intolerance to other ingredients, but only the 14 allergens are required to be declared as allergens by food law.
        db.run(`CREATE TABLE IF NOT EXISTS Ingredients (
            id INTEGER PRIMARY KEY,
            name TEXT,
            isCeleryFree BOOLEAN,
            isGlutenFree BOOLEAN,
            isCrustaceansFree BOOLEAN,
            isEggFree BOOLEAN,
            isFishFree BOOLEAN,
            isLupinFree BOOLEAN, 
            isDairyFree BOOLEAN,
            isMolluscFree BOOLEAN,
            isMustardFree BOOLEAN, 
            isPeanutFree BOOLEAN, 
            isSesameFree BOOLEAN, 
            isSoyfree BOOLEAN,
            isSulphurdioxideFree BOOLEAN,
            isTreenutFree BOOLEAN,
            isPaleo BOOLEAN,
            isVegan BOOLEAN,
            isVegetarian BOOLEAN,
            isAddedSugarFree BOOLEAN
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS ProductIngredients (
            productId INTEGER,
            ingredientId INTEGER,
            FOREIGN KEY(productId) REFERENCES Products(id),
            FOREIGN KEY(ingredientId) REFERENCES Ingredients(id)
        )`);
    });
};