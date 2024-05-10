import { check, validationResult } from "express-validator";



const userChecks= ()=>{
    return [
        check('userName')
            .notEmpty().withMessage('Por favor ingrese el nombre del usuario a registrar')
            .isString(),
        check('userPassword')
            .notEmpty().withMessage('Por favor ingrese una contraseña')
            .isString(),
        check('email')
            .isEmail().withMessage('El email ingresado no es valido')
            .notEmpty().withMessage('Por favor ingrese un email'),

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

export default userChecks;