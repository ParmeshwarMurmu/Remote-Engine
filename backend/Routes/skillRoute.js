const express = require('express');
const { SkillModel } = require('../Models/skillsSchema')


const skillRoute = express.Router()


skillRoute.post('/add', async (req, res) => {

    try {
        const { skill } = req.body
        const newSkill = new SkillModel({skill})
        await newSkill.save();
        res.status(200).send({ "message": "Skill Added" })

    } catch (error) {
        res.status(400).send({ "message": "Cannot add skill", "err": error })

    }
})



skillRoute.get('/predefinedSkills', async (req, res) => {

    try {

        const predefinedSkills = await SkillModel.find()
        res.status(200).send({ "predefinedSkills": predefinedSkills })

    } catch (error) {
        res.status(400).send({ "message": "Cannot get predefinedSkills ", "err": error })

    }
})





module.exports = {
    skillRoute
}