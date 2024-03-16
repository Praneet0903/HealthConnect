const mongoose = require('mongoose');
const ratingSchema = require('../schema/ratingSchema');

module.exports = mongoose.model('Rating', ratingSchema);