const mongoose = require('mongoose');
const moment = require('moment');
const express = require('express');
const router = express.Router();

const Appoinment = require('../models/Appoinment');

router.post('/:userId/:doctorId', async (req, res) => {
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

router.put('/confirmAppoinments/:appoinmentId', async (req, res) => {
    const newApp = {};
    newApp.confirmed = true;
    let appoinment = await Appoinment.findById(req.params.appoinmentId);
    
    if(!appoinment){
        return res.status(400).send({message:"No such appointment"});
    }
    appoinment = await Appoinment.findByIdAndUpdate(req.params.appoinmentId, {$set:newApp},{new:true})
    res.json(appoinment);
});

module.exports = router;