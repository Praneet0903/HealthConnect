const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true,
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
    }
    // requestAppoinments: [{
    //     appoinment: mongoose.Schema.Types.ObjectId,
    //     ref:'Appoinment'
    // }],
    // bookedAppoinments: [{
    //     appoinment: mongoose.Schema.Types.ObjectId,
    //     ref:'Appoinments'
    // }]
}); 