const express = require('express');
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");

const Ratings = require('../models/Rating');

router.get('/showRating/:doctorId', fetchuser, async(req, res) => {
    const doctorRating = await Ratings.findOne({doctorId: req.params.doctorId});
    if(!doctorRating) res.status(400).json({message: "Cannot find the ratings for the given doctor, make sure the doctor is valid"});
    res.status(200).send(doctorRating);
})

router.post('/:userId/:doctorId',fetchuser, async (req, res) => {

    const patientId = req.params.userId;
    const userRating = req.body.userRating;
    const userReview = req.body.userReview;
    if(userRating > 5 || userRating < 0) res.status(500).json({message: "Please enter the rating below 5 and above 0"});
    
    const jsonObj = {
        user: patientId,
        reviews: userReview
    }


    const findRating = await Ratings.findOne({doctorId: req.params.doctorId});
    if(!findRating) {
        await Ratings.create({
            doctorId: req.params.doctorId,
            rating: userRating,
            allReviews: [jsonObj]
        });
    } else {
        const array = findRating.allReviews;
        array.push(jsonObj);
        const rat = (findRating.rating + userRating) / 2;

        await Ratings.updateOne({doctorId: req.params.doctorId},
            {
                $set: {
                    rating: rat,
                    allReviews: array
                }
            }
        );
    }
    res.status(200).send(findRating);
});

module.exports = router
