const express = require('express')
require('dotenv').config()
const { connection }  = require('./Config/db')
const cors = require('cors')
const { userRoute } = require('./Routes/userRoute')


const app = express()
app.use(express.json())
app.use(cors())

app.use('/user', userRoute)





app.listen(process.env.PORT, async()=>{
    try {
        console.log("Connecting DataBase");
        await connection;
        console.log("Connected To DataBase");
        console.log(`Your server is running at port ${process.env.PORT}`);
    } catch (error) {
        console.log("something went wrong");
        console.log(error);
    }
})



// https://remote-engine.onrender.com