const roleSchema = require("../models/role")

const createNewRole = (req, res)=>{
    const {role, permission} = req.body
    const newRole = new roleSchema({role, permission})
    
    newRole
        .save()
        .then((role)=>{
            res.status(201).json({
                success : true,
                message : "role created",
                role : role
            })
        })
        .catch((err)=>{
            res.status(500).json({
                success : false,
                message : "server error",
                error : err
            })
        })
}
module.exports = {createNewRole}