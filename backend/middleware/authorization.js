const authorization = (string) =>{
    return (req, res, next) =>{
        if(!req.token.role.permission.includes(string)){
            return res.status(403).json({
                success : false,
                message : "Unauthorized"
            })
        }else{
            next()
        }
    }
}

module.exports = authorization;