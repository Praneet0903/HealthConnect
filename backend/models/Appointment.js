const mongoose = require('mongoose');
const appointmentSchema = require('../schema/appointmentSchema');

module.exports = mongoose.model('appointment', appointmentSchema);
