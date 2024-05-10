import user from "../../models/users.js";


const validateUserEmail= async(req,res,next)=>{
    const findEmail= await user.find({email:req.body.email});
    console.log(findEmail)
    if (findEmail.length===0){
        next();
    } else {
        res.status(400).json({
            msg: 'El email ingresado:' + ' ' +  req.body.email + ' ' + ', ya se encuentra registrado en la base de datos'
        })
    }
}

export default validateUserEmail;