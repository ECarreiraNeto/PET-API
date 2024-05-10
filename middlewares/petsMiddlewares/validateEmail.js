import pet from "../../models/pets.js";


const validateEmail= async(req,res,next)=>{
    const findEmail= await pet.find({"ownerDetails.email":req.body.ownerDetails.email});
    console.log(findEmail)
    if (findEmail.length===0){
        next();
    } else {
        res.status(400).json({
            msg: 'El email ingresado:' + ' ' +  req.body.ownerDetails.email + ' ' + ', ya se encuentra registrado en la base de datos'
        })
    }
}

export default validateEmail;