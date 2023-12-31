
const jwt = require('jsonwebtoken')
require('dotenv').config()



// authentication middleware to authenticate users
const authentication = (req, res, next)=>{
    const token = req.headers.authorization.split(" ")[1]
    console.log("token",token)
    if(token){
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=> {
            if(err){
                res.status(200).send({"message": "Please login"})
            }

            console.log(decoded);
            
            req.body.userId = decoded.userId;
            // req.body.userEmail = decoded.userEmail
            next()
        });
        
    }
    else{
        res.status(400).send({"message": "Please login"})

    }
   
}


module.exports={
    authentication
}