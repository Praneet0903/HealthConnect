const mongoose = require('mongoose');
const moment = require('moment');
const express = require('express');
const router = express.Router();

const Appointment = require('../models/Appointment');
const User = require('../models/User');

router.get('/:userId', async (req, res) => {
    
    const user = await User.findOne({_id: req.params.userId});
    let appointments, confirmedAppointments, finishedAppointments;
    if(user.isDoctor) {
        appointments = await Appointment.find({doctorId: req.params.userId, confirmed: false, finished: false});
        confirmedAppointments = await Appointment.find({doctorId: req.params.userId, confirmed: true, finished: false});
        finishedAppointments = await Appointment.find({doctorId: req.params.userId, finished: true});
    } else {
        appointments = await Appointment.find({patientId: req.params.userId, confirmed: false, finished: false});
        confirmedAppointments = await Appointment.find({patientId: req.params.userId, confirmed: true, finished: false});
        finishedAppointments = await Appointment.find({patientId: req.params.userId, finished: true});
    }
    res.status(200).json({
        pendingAppointtments: appointments,
        confirmedOnes: confirmedAppointments,
        finishedOne: finishedAppointments
    });

})

router.post('/:userId/:doctorId', async (req, res) => {
    const user = await User.findOne({_id: req.params.doctorId});
    if(!user.isDoctor) res.status(501).send({message: "Please choose a valid doctor"});
    const userId = req.params.userId;
    const doctorId = req.params.doctorId;
    const date = moment().format('DD-MM-YYYY');
    const time = req.body.time;

    await Appointment.create({
        patientId: userId,
        doctorId: doctorId,
        date: date,
        time: time
    });

    res.status(200).json({
        message: 'Success'
    });
});

router.put('/confirmAppointments/:appointmentId', async (req, res) => {
    const newApp = {};
    newApp.confirmed = true;
    let appointment = await Appointment.findById(req.params.appointmentId);
    
    if(!appointment){
        return res.status(400).send({message:"No such appointtment"});
    }
    appointment = await Appointment.findByIdAndUpdate(req.params.appointmentId, {$set:newApp},{new:true})
    res.json(appointment);
});

router.delete('/close/:appointmentId', async (req, res) => {
    const newApp = {};
    newApp.finished = true;
    let appointment = await Appointment.findById(req.params.appointmentId);
    appointment = await Appointment.findByIdAndUpdate(req.params.appointmentId, {$set:newApp},{new:true})
    res.status(200).json({message: "doctorId"});
})

module.exports = router;
