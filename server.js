require('dotenv').config()

const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes.js');

const app = express();
const PORT = process.env.PORT;
const API_TOKEN = process.env.API_TOKEN;

app.use(cors());

// Middleware to check API token
const checkToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    if (token !== `Bearer ${API_TOKEN}`){
        return res.status(401).json({ error: 'Invalid token' });
    }
    next();
};
app.use(checkToken);

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on localhost: ${PORT}`);
});