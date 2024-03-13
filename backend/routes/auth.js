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
const Token = require("../schema/token");
const sendEmail = require("../middleware/sendEmail");
const crypto = require("crypto");

const User = require('../models/User');

//Route 1: Signup
router.post('/signup', async(req,res)=>{

    const isDoctor = req.body.isDoctor
    const {email,password} = req.body;
    let user = await User.findOne({email: email});
    if(user) {
        res.status(400).send({message:"User already exists"});
        //if User already exists
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);


    user = await new User({...req.body,password:secPass}).save();

    //data to be sent to User
    const data = {
        user: {
            id: User.id
        }
    }
    console.log(user)
    const token =   await new Token({
        userId:user._id,
        token:crypto.randomBytes(32).toString("hex")
    }).save();
    const url = `http://localhost:5000/auth/${user._id}/verify/${token.token}`;
    await sendEmail(user.email,"Verify Email",url)

    // res.status(201).send({message:"Email has been sent"});

    //creating authToken
    const authToken = jwt.sign(data, process.env.JWT_SECRET)
    success=true;
    res.json({ success,authToken });

    //redirect
})

//Route 2: Login 
router.post('/login', async (req, res) => {
    let success=false;

    const { email, password } = req.body;      //destructuring to get email and password
    try {

        //check if user's email exist in database
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success,error: "Please enter correct credentials" });
        }

        //checking whether the password is valid
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success,error: "Please enter correct credentials" });
        }

        //data to be sent to user
        const data = {
            user: {
                id: user.id
            }
        }
        
        console.log(user);

        if(!user.verified){
            console.log("Andar gaya??")
            let token = await Token.findOne({userId:user._id});
            if(!token){
                token = await new Token({
                    userId:user._id,
                    token:crypto.randomBytes(32).toString("hex")
                }).save();
            }
            const url = `http://localhost:5000/auth/${user._id}/verify/${token.token}`;
            await sendEmail(user.email,"Verify Email",url)
        
            res.status(201).send({message:"Email has been sent"});
        }

        //creating authToken
        const authToken = jwt.sign(data, process.env.JWT_SECRET)
        success= true;
        let dr = user.isDoctor;
        // res.json({ success,authToken,dr});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}
)

// Route 3: Email Verification
router.get("/:id/verify/:token",async(req,res)=>{
    try {
        const user = await User.findOne({_id:req.params.id})
        if(!user) return res.status(400).send({message:"invalid link"});
        const token = await Token.findOne({
            userId:user._id,
            token: req.params.token
        })
        if(!token) return res.status(400).send({message:"invalid link"});
        await User.updateOne({_id:user._id},{$set:{verified:true}});
        // await token.remove();
        await Token.deleteOne({userId:user._id});
        res.status(200).send({message:"Email verified"});
    } catch (error) {
        console.log(error);
         return res.status(500).json(error);
    }
})

module.exports = router