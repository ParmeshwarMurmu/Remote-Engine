const mongoose = require('mongoose')


// SKILLS SCHEMA 

const skillSchema = mongoose.Schema({
    skill: { type: String, required: true },
}, {
    versionKey: false
})

const SkillModel = mongoose.model("skill", skillSchema)

module.exports = {
    SkillModel
}