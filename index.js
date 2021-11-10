const express = require('express');
const router  = require('./router/router');
const bodyParser = require('body-parser')
//set up express
const app = express();

app.use(bodyParser.json());



app.use('/product',router);
//listen for request

app.listen(process.env.port||4000,()=>{
    console.log("now listing 4000");
} )

//DB conection

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL||"mongodb+srv://iamrithi:iamrithi333@cluster0.gdtlt.mongodb.net/EcProduct?retryWrites=true&w=majority",()=>{
    console.log("DB connected !!!")
});
mongoose.Promise = global.Promise;