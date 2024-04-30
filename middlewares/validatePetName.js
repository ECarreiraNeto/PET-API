import pet from "../models/pets.js";


const validatePetName= async(req,res,next)=>{
    const findPetName= await pet.find({petName:req.params.petName});
    if (findPetName.length!==0){
        next();
    } else {
        res.status(400).json({
            msg: 'La mascota ingresada:' + ' ' +  req.params.petName + ' ' + ', no se encuentra registrada en la base de datos'
        })
    }
}

export default validatePetName;