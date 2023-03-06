const userModel = require("../models/user")

const register = (req, res) =>{
    const {firstName, lastName, DoB, phoneNumber, email , password} = req.body

    const newUser = new userModel({
        firstName,
        lastName,
        DoB,
        phoneNumber,
        email,
        password
    })

    newUser
        .save()
        .then(()=>{
            res.json({
                success : true,
                message : "user created successfully"
            })
        })
        .catch((err)=>{
            res.json({
                error : err,
                message : "server error"
            })
        })
}

const login = (req, res) =>{
    const {email, password} = req.body

    userModel
        .find({email, password})
        .then((result)=>{
            res.satatus(200)
            res.json({
                success : true,
                message : "Valid credentials"
            })
        })
        .catch((err)=>{
            res.status(401)
            res.json({
                error : err,
                success : false,
                message : "Invalid credentials"
            })
        })
}

module.exports = {register, login}