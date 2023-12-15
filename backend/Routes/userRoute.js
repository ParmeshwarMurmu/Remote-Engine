const express = require('express');
const { UserModel } = require('../Models/userSchema');
require('dotenv').config()
const jwt = require('jsonwebtoken')


const userRoute = express.Router()

userRoute.post('/signUp', async (req, res) => {

    try {
        const { email } = req.body
        const existingUser = await UserModel.findOne({ email })
        if (existingUser) {
            res.status(200).send({ "message": "Email Already Exists" })
        }
        else {
                const newUser = new UserModel({ ...req.body})
                await newUser.save();
                res.status(200).send({ "message": "SignUp Successfully" }) 
        }

    } catch (error) {
        res.status(400).send({ "message": "SignUp Failed", "err": error })

    }
})



userRoute.post('/login', async (req, res) => {

    try {
        const { email } = req.body
        const existingUser = await UserModel.findOne({ email })
        if (existingUser) {
            
                const token = jwt.sign({ userId: existingUser._id, userEmail: existingUser.email }, process.env.SECRET_KEY);
                res.status(200).send({ "message": "Login Successfully", "userId": existingUser._id, "token": token })
        }
        else {
            res.status(200).send({ "message": "Email does not exists" })
        }

    } catch (error) {
        res.status(400).send({ "message": "Login Failed", "err": error })

    }
})













module.exports = {
    userRoute
}