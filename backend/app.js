const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const ErrorMiddleware = require('./middleware/error')
const product = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
app.use(bodyParser.urlencoded({ extended: false }));
const { createProduct, getAllProducts } = require('./controller/productController')


//-------------------------------------------------------
app.use(express.json());
require('dotenv').config({ path: 'backend/config/config.env' });




app.use('/api/v1', product);
app.use('/api/v1',userRoutes);



// middle ware for error 
app.use(ErrorMiddleware)
module.exports = app