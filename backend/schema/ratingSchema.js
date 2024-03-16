const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    }, rating: {
        type: Number
    }, allReviews: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }, reviews: {
            type: String
        }
    }]
});