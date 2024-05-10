import pet from "../../models/pets.js";


const validatePetID= async(req,res,next)=>{
    const findPetId= await pet.findById(req.params.id);
    if (findPetId!==null){
        next();
    } else {
        res.status(400).json({
            msg: 'El id ingresado:' + ' ' +  req.params.id + ' ' + ', no se encuentra registrado en la base de datos'
        })
    }
}

export default validatePetID;