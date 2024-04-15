module.exports.seedDatabase = function(db) {
    db.serialize(() => {
        // Mock-up data 
        //1
        db.run(`INSERT INTO Products (name, description, barcode, image_url) VALUES (?, ?, ?, ?)`, ['Gullón chocholate sandwich', 'Sugar free chocholate sandwich', '8410376037784', 'https://images.openfoodfacts.org/images/products/841/037/603/7784/front_en.71.full.jpg'], (err) => {
            if (err) {
                console.error('Error inserting product:', err.message);
            }
        });

        //2
        db.run(`INSERT INTO Products (name, barcode, image_url) VALUES (?,?,?)`, ['Gullón digestive oats orange biscuits', '8410376047578','https://images.openfoodfacts.org/images/products/841/037/604/7578/front_en.43.full.jpg'], (err) => {
            if (err) {
                console.error('Error inserting product:', err.message);
            }
        });

        //3
        db.run(`INSERT INTO Products (name, description, barcode, image_url) VALUES (?,?,?,?)`, ['Alesto pecan nuts', '200 g', '4056489682677','https://imgproxy-retcat.assets.schwarz/AwiyhqHaDM75KsRfyfme9Nio-UBDeoQVmKPlGtT7lGI/sm:1/w:1500/h:1125/cz/M6Ly9wcm9kLWNhd/GFsb2ctbWVkaWEvaHUvMS8wRkQxOTdENTM0N0RBQzc4QTgxREY5RTk/5NDlGMjdBOTEwQkQyNjE0RDJEQzgyODY4QTVDNzhDNDkwRTBDQzJGLmpwZw.jpg'], (err) => {
            if (err) {
                console.error('Error inserting product:', err.message);
            }
        });

        //4
        db.run(`INSERT INTO Products (name, description, barcode, image_url) VALUES (?,?,?,?)`, ['Coca cola zero', '0,5 l', '5449000131836','https://media.dm-static.com/images/f_auto,q_auto,c_fit,h_440,w_500/v1699768293/products/pim/143959_coca-cola_05l_zero_5449000131836_0.5l/coca-cola-szensavas-uditoital-zero'], (err) => {
            if (err) {
                console.error('Error inserting product:', err.message);
            }
        });

        //5
        db.run(`INSERT INTO Products (name, description, barcode, image_url) VALUES (?,?,?,?)`, ['Jana natural mineral water', 'Non-carbonated, 1l', '3858890877984','https://static.groby.hu/media/a06/983/conv/groby-jana-termeszetes-asvanyviz-1-l-szensavmentes-sportkupakos-full.jpg'], (err) => {
            if (err) {
                console.error('Error inserting product:', err.message);
            }
        });

        //6
        db.run(`INSERT INTO Products (name, description, barcode, image_url) VALUES (?,?,?,?)`, ['Dm bio vegetable ravioli', 'Organic ravioli/Filled with peppers and aubergines/Tomato sauce with herbs/Ready in 1 minute/Microwaveable; The dmBio Vegetable Ravioli with Spicy Tomato Sauce is a quick and tasty Italian pasta dish with peppers and aubergines, also ideal for vegan diets. A tomato sauce flavoured with cauliflower and basil makes this a delicious dish that can be prepared in no time.', '3858890877984','https://media.dm-static.com/images/f_auto,q_auto,c_fit,h_440,w_500/v1711930417/products/pim/4066447503722-692085704/dmbio-bio-egytaletel-zoldsegekkel-toltott-olasz-ravioli'], (err) => {
            if (err) {
                console.error('Error inserting product:', err.message);
            }
        });

        //7
        db.run(`INSERT INTO Products (name, description, barcode, image_url) VALUES (?,?,?,?)`, ['Diablo hazelnut & chocholate spread', 'Chocolate hazelnut cream/Excellent on its own or to flavour cakes/Sweetener/No added sugar, 350 g', '5060309490044','https://media.dm-static.com/images/f_auto,q_auto,c_fit,h_440,w_500/v1699792000/products/pim/749873_diablo_mogyoros_csokikrem_350g_hcn_5060309490044/diablo-mogyoros-csokoladekrem-hozzaadott-cukor-nelkul-edesitoszerrel'], (err) => {
            if (err) {
                console.error('Error inserting product:', err.message);
            }
        });

        //8
        db.run(`INSERT INTO Products (name, description, barcode, image_url) VALUES (?,?,?,?)`, ['BioTech USA chocolate-caramel bar', 'Chocolate-caramel flavoured high-protein bar, without added sugar and aspartame, lactose and gluten free, with sweeteners. 50 g', '5999076223619','https://media.dm-static.com/images/f_auto,q_auto,c_fit,h_440,w_500/v1699775569/products/pim/HU_05999076223619_B_P1_BioTech_USA_Zero_Bar_csokolade_karamell_izu__magas_proteintartalmu_szelet/biotechusa-szelet-csokolade-karamell'], (err) => {
            if (err) {
                console.error('Error inserting product:', err.message);
            }
        });

        //9
        db.run(`INSERT INTO Products (name, description, barcode, image_url) VALUES (?,?,?,?)`, ['Sága classic turkey ham', 'Formed, heat-treated turkey thigh ham with added milk protein, sliced, in protective gas packaging. Excellent for sandwiches, salads and pasta. Gluten-free product. 100 g', '5995663940143','https://static.groby.hu/media/b6f/aaf/conv/S%C3%A1ga-Eredeti-selyemsonka-100-g-glut%C3%A9nmentes-full.png'], (err) => {
            if (err) {
                console.error('Error inserting product:', err.message);
            }
        });

        //10
        db.run(`INSERT INTO Products (name, description, barcode, image_url) VALUES (?,?,?,?)`, ['Univer mustard', '700 g', '5997010304189','https://ahuazurewebblob0-d2geauehc9ekc7ey.z01.azurefd.net/auchan/cache/product_medium/product/26603309/01_60121_front_091850.png.webp'], (err) => {
            if (err) {
                console.error('Error inserting product:', err.message);
            }
        });

        // Inserting an ingredient with boolean values
        //1
        db.run(`INSERT INTO Ingredients 
        (name, isCeleryFree, isGlutenFree, isCrustaceansFree, isEggFree, isFishFree, isLupinFree, isDairyFree, isMolluscFree, isMustardFree, isPeanutFree, isSesameFree, isSoyfree, isSulphurdioxideFree, isTreenutFree, isPaleo, isVegan, isVegetarian, isAddedSugarFree) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        ['wheat flour',1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1], (err) => {
            if (err) {
                console.error('Error inserting ingredient:', err.message);
            }
        });

        //2
        db.run(`INSERT INTO Ingredients 
        (name, isCeleryFree, isGlutenFree, isCrustaceansFree, isEggFree, isFishFree, isLupinFree, isDairyFree, isMolluscFree, isMustardFree, isPeanutFree, isSesameFree, isSoyfree, isSulphurdioxideFree, isTreenutFree, isPaleo, isVegan, isVegetarian, isAddedSugarFree) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        ['milk', 1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1], (err) => {
            if (err) {
                console.error('Error inserting ingredient:', err.message);
            }
        });

        //3
        db.run(`INSERT INTO Ingredients 
        (name, isCeleryFree, isGlutenFree, isCrustaceansFree, isEggFree, isFishFree, isLupinFree, isDairyFree, isMolluscFree, isMustardFree, isPeanutFree, isSesameFree, isSoyfree, isSulphurdioxideFree, isTreenutFree, isPaleo, isVegan, isVegetarian, isAddedSugarFree) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        ['soy', 1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1], (err) => {
            if (err) {
                console.error('Error inserting ingredient:', err.message);
            }
        });

        //4
        db.run(`INSERT INTO Ingredients 
        (name, isCeleryFree, isGlutenFree, isCrustaceansFree, isEggFree, isFishFree, isLupinFree, isDairyFree, isMolluscFree, isMustardFree, isPeanutFree, isSesameFree, isSoyfree, isSulphurdioxideFree, isTreenutFree, isPaleo, isVegan, isVegetarian, isAddedSugarFree) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        ['sulphites', 1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1], (err) => {
            if (err) {
                console.error('Error inserting ingredient:', err.message);
            }
        });

        //5
        db.run(`INSERT INTO Ingredients 
        (name, isCeleryFree, isGlutenFree, isCrustaceansFree, isEggFree, isFishFree, isLupinFree, isDairyFree, isMolluscFree, isMustardFree, isPeanutFree, isSesameFree, isSoyfree, isSulphurdioxideFree, isTreenutFree, isPaleo, isVegan, isVegetarian, isAddedSugarFree) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        ['sugar', 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0], (err) => {
            if (err) {
                console.error('Error inserting ingredient:', err.message);
            }
        });

        //6
        db.run(`INSERT INTO Ingredients 
        (name, isCeleryFree, isGlutenFree, isCrustaceansFree, isEggFree, isFishFree, isLupinFree, isDairyFree, isMolluscFree, isMustardFree, isPeanutFree, isSesameFree, isSoyfree, isSulphurdioxideFree, isTreenutFree, isPaleo, isVegan, isVegetarian, isAddedSugarFree) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        ['pecan nut', 1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1], (err) => {
            if (err) {
                console.error('Error inserting ingredient:', err.message);
            }
        });

        //7
        db.run(`INSERT INTO Ingredients 
        (name, isCeleryFree, isGlutenFree, isCrustaceansFree, isEggFree, isFishFree, isLupinFree, isDairyFree, isMolluscFree, isMustardFree, isPeanutFree, isSesameFree, isSoyfree, isSulphurdioxideFree, isTreenutFree, isPaleo, isVegan, isVegetarian, isAddedSugarFree) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        ['hazelnut', 1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1], (err) => {
            if (err) {
                console.error('Error inserting ingredient:', err.message);
            }
        });

        //8
        db.run(`INSERT INTO Ingredients 
        (name, isCeleryFree, isGlutenFree, isCrustaceansFree, isEggFree, isFishFree, isLupinFree, isDairyFree, isMolluscFree, isMustardFree, isPeanutFree, isSesameFree, isSoyfree, isSulphurdioxideFree, isTreenutFree, isPaleo, isVegan, isVegetarian, isAddedSugarFree) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        ['egg', 1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1], (err) => {
            if (err) {
                console.error('Error inserting ingredient:', err.message);
            }
        });

        //9
        db.run(`INSERT INTO Ingredients 
        (name, isCeleryFree, isGlutenFree, isCrustaceansFree, isEggFree, isFishFree, isLupinFree, isDairyFree, isMolluscFree, isMustardFree, isPeanutFree, isSesameFree, isSoyfree, isSulphurdioxideFree, isTreenutFree, isPaleo, isVegan, isVegetarian, isAddedSugarFree) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        ['meat', 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1], (err) => {
            if (err) {
                console.error('Error inserting ingredient:', err.message);
            }
        });

        //10
        db.run(`INSERT INTO Ingredients 
        (name, isCeleryFree, isGlutenFree, isCrustaceansFree, isEggFree, isFishFree, isLupinFree, isDairyFree, isMolluscFree, isMustardFree, isPeanutFree, isSesameFree, isSoyfree, isSulphurdioxideFree, isTreenutFree, isPaleo, isVegan, isVegetarian, isAddedSugarFree) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        ['mustard', 1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1], (err) => {
            if (err) {
                console.error('Error inserting ingredient:', err.message);
            }
        });

        // N-N relationship
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

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (1, 3)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (1, 4)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (2, 1)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (2, 5)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (3, 6)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (4, 4)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (6, 1)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (6, 5)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (7, 2)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (7, 7)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (8, 2)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (8, 3)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (8, 8)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (9, 2)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (9, 9)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (10, 5)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

        db.run(`INSERT INTO ProductIngredients (productId, ingredientId) VALUES (10, 10)`, (err) => {
            if (err) {
                console.error('Error establishing relationship:', err.message);
            }
        });

    });
};