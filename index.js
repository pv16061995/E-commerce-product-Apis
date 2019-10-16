const express= require('express');
const bodyParser= require('body-parser');
const { mongoose } = require('./db/db');

var ProductController = require('./controllers/products');

var app = express();
app.use(bodyParser.json());


app.listen(3000,()=>console.log('Server started with port : 3000'));

app.use('/products',ProductController);