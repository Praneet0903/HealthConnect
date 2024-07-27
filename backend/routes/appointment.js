const mongoose = require('mongoose');
const moment = require('moment');
const express = require('express');
const router = express.Router();

const appointment = require('../models/appointment');
const User = require('../models/User');
const fetchuser = require("../middleware/fetchuser");


//Route 1: To get all the appointments (auth-token) required
router.get('/getapts',fetchuser, async (req, res) => {
    
    const user = User.findById(req.user.id);
    let appointments, confirmedappointments, finishedappointments;
    if(user.isDoctor) {
        appointments = await appointment.find({doctorId: req.params.userId, confirmed: false, finished: false});
        confirmedappointments = await appointment.find({doctorId: req.params.userId, confirmed: true, finished: false});
        finishedappointments = await appointment.find({doctorId: req.params.userId, finished: true});
    } else {
        appointments = await appointment.find({patientId: req.params.userId, confirmed: false, finished: false});
        confirmedappointments = await appointment.find({patientId: req.params.userId, confirmed: true, finished: false});
        finishedappointments = await appointment.find({patientId: req.params.userId, finished: true});
    }
    res.status(200).json({
        pendingAppointments: appointments,
        confirmedOnes: confirmedappointments,
        finishedOne: finishedappointments
    });

})

//Route 2: Appointment creation
router.post('/:doctorId',fetchuser, async (req, res) => {
    const user = await User.findOne({_id: req.params.doctorId});
    if(!user.isDoctor) res.status(501).send({message: "Please choose a valid doctor"});
    const userId = req.user.id;
    const doctorId = req.params.doctorId;
    const date = moment().format('DD-MM-YYYY');
    const time = req.body.time;

    await appointment.create({
        patientId: userId,
        doctorId: doctorId,
        date: date,
        time: time
    });

    res.status(200).json({
        message: 'Success'
    });
});

//Route 3: Confirm Appointments
router.put('/confirmappointments/:appointmentId',fetchuser, async (req, res) => {
    const newApp = {};
    newApp.confirmed = true;
    let appointment = await appointment.findById(req.params.appointmentId);
    
    if(!appointment){
        return res.status(400).send({message:"No such appointment"});
    }
    appointment = await appointment.findByIdAndUpdate(req.params.appointmentId, {$set:newApp},{new:true})
    res.json(appointment);
});

//Route 4:Closes appointment
router.delete('/close/:appointmentId',fetchuser, async (req, res) => {
    const newApp = {};
    newApp.finished = true;
    let appointment = await appointment.findById(req.params.appointmentId);
    appointment = await appointment.findByIdAndUpdate(req.params.appointmentId, {$set:newApp},{new:true})
    res.status(200).json({message: "doctorId"});
})

module.exports = router;
