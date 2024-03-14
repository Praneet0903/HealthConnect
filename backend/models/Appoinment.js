const mongoose = require('mongoose');
const appoinmentSchema = require('../schema/appoinmentSchema');

module.exports = mongoose.model('Appoinment', appoinmentSchema);