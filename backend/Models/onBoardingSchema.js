const mongoose = require('mongoose')


// ONBOARDING SCHEMA 

// firstName: '',
// lastName: '',
// phoneNumber: '',
// email: '',
// skills: [{_id: "ere34", skill: "css"}], _id ref to skills collection

const skillSchema = new mongoose.Schema({
     _id: { type: mongoose.Schema.Types.ObjectId, ref: 'skill', required: true },
    // skill: { type: String, required: true },
  });
  

  // Time Period Schema
  const timePeriodSchema = new mongoose.Schema({
    startDate: { type:  String},
    endDate: { type:  String },
  });
  

  // Professional Experience Schema
  const professionalExperienceSchema = new mongoose.Schema({
    companyName: { type: String },
    techStack: { type: String },
    skillsUsed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'skill' }],
    timePeriod: timePeriodSchema,
  });
  

  // Educational Experience Schema
  const educationalExperienceSchema = new mongoose.Schema({
    degreeName: { type: String },
    schoolName: { type: String },
    timePeriod: timePeriodSchema,
  });



  // Final Onboarding Schema

const onbordingSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    skills: [skillSchema],
    professionalExperience: [professionalExperienceSchema],
    educationalExperience: [educationalExperienceSchema],
    userId: {type:mongoose.Schema.Types.ObjectId, ref:'user', required: true}
}, {
    versionKey: false
})

const OnboardingModel = mongoose.model("onbording", onbordingSchema)

module.exports = {
    OnboardingModel
}