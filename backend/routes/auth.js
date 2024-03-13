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
const sendEmail = require("./sendEmail");
const crypto = require("crypto");