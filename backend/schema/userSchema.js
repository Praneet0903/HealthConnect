const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
    },
    name: {
        type: String
    },
    consultationFees: {
        tpye: String
    },
    isDoctor: {
        type: Boolean
    },
    location: {
        type: String
    },
    googleId: {
        type: String
    },
    verified: {
        type: Boolean,
        default: false
    },
    workingHours: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    qualifications: {
        type: String
    },
    requestAppoinments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Appoinment'
    }],
    bookedAppoinments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Appoinment'
    }]
}); 