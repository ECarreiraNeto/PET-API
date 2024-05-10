import express from "express";
import apiController from "../controllers/apiControllers.js";
import validatePetName from "../middlewares/petsMiddlewares/validatePetName.js";
import validateOwnerName from "../middlewares/petsMiddlewares/validateOwnerName.js";
import validatePetID from "../middlewares/petsMiddlewares/validatePetId.js";
import petChecks from "../middlewares/petsMiddlewares/validateConditions.js";
import validateEmail from "../middlewares/petsMiddlewares/validateEmail.js";

const apiRouter= express.Router();

//Rutas para manejo de mascotas:
apiRouter.get('/getAllPets',apiController.getAll);
apiRouter.get('/getOne/:id',validatePetID,apiController.getOne);
apiRouter.get('/findByName/:petName',validatePetName,apiController.findByName);
apiRouter.get('/findByOwner/:petOwner',validateOwnerName,apiController.findByOwner);
apiRouter.get('/pendingPay',apiController.findByPendingPay);
apiRouter.get('/underTreatment',apiController.findByState);
apiRouter.post('/addPet',petChecks(),validateEmail,apiController.insertOne);
apiRouter.put('/editPet/:id',validatePetID,petChecks(),apiController.updateOne);
apiRouter.delete('/deletePet/:id',validatePetID,apiController.deleteOne);




export default apiRouter;



