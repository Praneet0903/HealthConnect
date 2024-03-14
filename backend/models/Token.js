const mongoose = require('mongoose');
const tokenSchema = require('../schema/token');

module.exports = mongoose.model("Token",tokenSchema);