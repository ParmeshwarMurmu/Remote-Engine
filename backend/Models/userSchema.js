const mongoose = require('mongoose')


// USER SCHEMA 

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
}, {
    versionKey: false
})

const UserModel = mongoose.model("user", userSchema)

module.exports = {
    UserModel
}