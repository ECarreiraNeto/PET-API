import { check, validationResult } from "express-validator";



const checks= ()=>{
    return [
        check('petName')
            .notEmpty().withMessage('Por favor ingrese el nombre de la mascota')
            .isString().withMessage('El campo solo admite cadenas de texto'),
        check('petOwner')
            .notEmpty().withMessage('Por favor ingrese el nombre del dueño de la mascota')
            .isString().withMessage('El campo solo admite cadenas de texto'),
        check('ownerDetails.phoneNumber')
            .notEmpty().withMessage('Debe ingresar un numero de telefono')
            .isNumeric().withMessage('El campo solo admite numeros'),
        check('ownerDetails.email')
            .isEmail().withMessage('El email ingresado es invalido'),
        check('petDetails.type')
            .notEmpty().withMessage('Debe ingresar el tipo de animal a registrar')
            .isString().withMessage('El campo solo admite cadenas de texto'),
        check('petDetails.animalBreed')
            .notEmpty().withMessage('Debe ingresar la raza y caracteristicas del animal')
            .isString().withMessage('El campo solo admite cadenas de texto'),
        check('petDetails.gender')
            .notEmpty().withMessage('Debe ingresar el sexo del animal')
            .isString().withMessage('El campo solo admite cadenas de texto'),
        check('petDetails.age')
            .notEmpty().withMessage('Debe ingresar la edad del animal')
            .isNumeric().withMessage('El campo solo admite numeros'),
        check('petDetails.underTreatment')
            .notEmpty().withMessage('Debe indicar si el animal esta bajo tratamiento')
            .isBoolean().withMessage('El campo solo admite valores booleanos'),
        
        (req,res,next)=>{
            const error=validationResult(req);
            if(!(error.isEmpty())){
                const checkError= error.array().map(error => error.msg);
                res.status(400).json({
                    msg:checkError
                })
                return;
            }
            next();
        }
    ]
} 

export default checks;