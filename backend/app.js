const express = require('express');
//const router = require('./routes/productRoutes')
const bodyParser = require('body-parser') 
const app = express();
const ErrorMiddleware =require('./middleware/error')
const product = require('./routes/productRoutes')
app.use(bodyParser.urlencoded({ extended: false }));

//try------------------------------------
const {createProduct,getAllProducts} = require('./controller/productController')

//-------------------------------------------------------
app.use(express.json());
require('dotenv').config({path:'backend/config/config.env'});

app.use('/api/v1',product)
//app.get('/api/v1/product',getAllProducts)
//app.post('/api/v1/product/new',createProduct)

//app.get('/books',(req,res)=>{
//    res.status(200).json({message:"this is working"})
//})


// middle ware for error 
app.use(ErrorMiddleware)
module.exports = app