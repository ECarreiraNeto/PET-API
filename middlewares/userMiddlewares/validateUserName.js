import user from "../../models/users.js";


const validateUserName= async (req,res,next)=>{
    const findUsername= await user.find({'userName':req.body.userName});
    if (findUsername.length===0) {
        next()
    } else {
        res.status(400).json({
            msg:'El usuario:' + ' ' +  req.body.userName + ' ' + 'ya se encuentra registrado'
        })
    }
}

export default validateUserName;