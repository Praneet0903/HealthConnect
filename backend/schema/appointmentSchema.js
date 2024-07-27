const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    doctorId: {
        type: String,
        required: true
    }, 
    patientId: {
        type: String, 
        required: true
    },
    time: {
        type: String,
    },
    date: {
        type: String
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    finished: {
        type: Boolean,
        default: false
    }
});
module.exports = appoinmentSchema;
