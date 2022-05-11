const express =require ("express");
var cookieParser = require('cookie-parser');
var cors = require('cors');
const path = require('path');

// import files //
const productRoute = require('./Routers/ProductRouter');
const postalcodeRouter = require('./Routers/PostalcodeRouter');
const cartRouter = require('./Routers/CartRouter');
const db = require("./dbconnected");

// setup server //
const app = express();
app.use(express.json());
app.use(cors())
app.use(cookieParser());
 
// import routes //
app.use('/Product',productRoute);
app.use('/Postalcode',postalcodeRouter);
app.use('/Cart',cartRouter);


if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}

// running port //
const port=process.env.PORT || 5000;

app.listen(port,() =>`server running`);