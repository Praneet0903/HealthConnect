const mongoose = require('mongoose');
const moment = require('moment');
const express = require('express');
const router = express.Router();

const Appoinment = require('../models/Appoinment');

router.post('/appoinment/:userId/:doctorId', async (req, res) => {
    const userId = req.params.userId;
    const doctorId = req.params.doctorId;
    const date = moment().format('DD-MM-YYYY');
    const time = req.body.time;

    await Appoinment.create({
        patientId: userId,
        doctorId: doctorId,
        date: date,
        time: time
    });

    res.status(200).json({
        message: 'Success'
    });
});

router.post('/confirmAppoinments/:appoinmentId', (req, res) => {
    Appoinment.updateOne({_id: req.params.appoinmentId}, {
        $set: {
            confirmed: true
        }
    });
});

module.exports = router;