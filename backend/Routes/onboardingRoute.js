const express = require('express');
const { OnboardingModel } = require('../Models/onBoardingSchema');
const { authentication } = require('../Middleware/Authentication');

const onboardingRoute = express.Router()


onboardingRoute.post('/submit', authentication, async (req, res) => {

    try {
        const { email, firstName, lastName, phoneNumber, professionalExperience, educationalExperience, userId } = req.body
        console.log(email, firstName, lastName, phoneNumber, professionalExperience, educationalExperience, userId);
        const newBoarding = new OnboardingModel({...req.body})
        await newBoarding.save()
        res.status(200).send({ "message": "Submitted Successfully" })


    } catch (error) {
        res.status(400).send({ "message": "SignUp Failed", "err": error })

    }
})


onboardingRoute.get('/viewApplication', async (req, res) => {

    try {
        const { email, firstName, lastName, phoneNumber, professionalExperience, educationalExperience, userId } = req.body
        console.log(email, firstName, lastName, phoneNumber, professionalExperience, educationalExperience, userId);
        const newBoarding = new OnboardingModel({...req.body})
        await newBoarding.save()
        res.status(200).send({ "message": "Submitted Successfully" })


    } catch (error) {
        res.status(400).send({ "message": "SignUp Failed", "err": error })

    }
})






module.exports = {
    onboardingRoute
}