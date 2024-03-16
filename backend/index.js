require('dotenv').config();
const express = require('express');
const path = require("path")
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const cors = require("cors");
const connectToMongo = require('./db');

connectToMongo();

const app = express();
app.use(express.json());
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))
// app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors())

//available routes
// app.use('/api/auth',require('./routes/auth'));
app.use('/auth', require('./routes/auth'));
app.use('/appointment', require('./routes/appoinment'));
app.use('/rating', require('./routes/rating'));
app.get("/",(req,res)=>{
    return res.render("index");
})

app.listen(5000, () => {
    console.log('http://localhost:5000/');
});
