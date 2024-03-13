require('dotenv').config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require('passport');
const session = require('express-session');
const googleOAuth = require('passport-google-oauth2').Strategy;
const findOrCreate = require('mongoose-findorcreate');
const passportLocalMongoose = require('passport-local-mongoose')
// const Token = require("../schema/token");
// const sendEmail = require("./sendEmail");
const crypto = require("crypto");

const User = require('../models/User');

//Route 1: Signup
router.post('/signup', async(req,res)=>{

    const isDoctor = req.body.isDoctor
    const {email,password} = req.body;
    const user = await User.findOne({email: email});
    if(user) {
        res.status(400).send({message:"User already exists"});
        //if User already exists
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);

    // //creating a new User
    // User = await User.create({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: secPass,
    // })

    

    
    console.log(isDoctor);
    if(isDoctor){
        const {email, password, name, location, contact, qualificatin, workingHours, consultationFees} = req.body;
        const user = await User.create({
            email: email,
            password: secPass,
            name: name,
            location: location,
            phoneNumber: contact,
            qualification: qualificatin,
            workingHours: workingHours,
            consultationFees: consultationFees,
            isDoctor:true
        });
    }
    else{
        const {email, password, name, contact} = req.body;
        let user = await User.create({
            email: email,
            password: secPass,
            name: name,
            // medicalRecords: medicalRecords,
            phoneNumber: contact,
            isDoctor:false
        });
    }

    //data to be sent to User
    const data = {
        user: {
            id: User.id
        }
    }

    //creating authToken
    const authToken = jwt.sign(data, process.env.JWT_SECRET)
    success=true;
    res.json({ success,authToken });

    //redirect
})

module.exports = router