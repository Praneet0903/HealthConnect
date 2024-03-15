const mongoose = require('mongoose');
const moment = require('moment');
const express = require('express');
const router = express.Router();

const Appoinment = require('../models/Appoinment');
const User = require('../models/User');

router.get('/:userId', async (req, res) => {
    
    const user = await User.findOne({_id: req.params.userId});
    let appoinments, confirmedAppoinments, finishedAppoinments;
    if(user.isDoctor) {
        appoinments = await Appoinment.find({doctorId: req.params.userId, confirmed: false, finished: false});
        confirmedAppoinments = await Appoinment.find({doctorId: req.params.userId, confirmed: true, finished: false});
        finishedAppoinments = await Appoinment.find({doctorId: req.params.userId, finished: true});
    } else {
        appoinments = await Appoinment.find({patientId: req.params.userId, confirmed: false, finished: false});
        confirmedAppoinments = await Appoinment.find({patientId: req.params.userId, confirmed: true, finished: false});
        finishedAppoinments = await Appoinment.find({patientId: req.params.userId, finished: true});
    }
    res.status(200).json({
        pendingAppointments: appoinments,
        confirmedOnes: confirmedAppoinments,
        finishedOne: finishedAppoinments
    });

})

router.post('/:userId/:doctorId', async (req, res) => {
    const user = await User.findOne({_id: req.params.doctorId});
    if(!user.isDoctor) res.status(501).send({message: "Please choose a valid doctor"});
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

router.delete('/close/:appoinmentId', async (req, res) => {
    const newApp = {};
    newApp.finished = true;
    let appoinment = await Appoinment.findById(req.params.appoinmentId);
    appoinment = await Appoinment.findByIdAndUpdate(req.params.appoinmentId, {$set:newApp},{new:true})
    res.status(200).json({message: "doctorId"});
})

module.exports = router;