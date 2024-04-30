import pet from "../models/pets.js";


const validateOwnerName= async(req,res,next)=>{
    const findOwnerName= await pet.find({petOwner:req.params.petOwner});
    if (findOwnerName.length!==0){
        next();
    } else {
        res.status(400).json({
            msg: 'La persona ingresada:' + ' ' +  req.params.petOwner + ' ' + ', no se encuentra registrada en la base de datos'
        })
    }
}

export default validateOwnerName;