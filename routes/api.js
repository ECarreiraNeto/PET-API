import express from "express";
import apiController from "../controllers/apiControllers.js";
import validatePetName from "../middlewares/validatePetName.js";
import validateOwnerName from "../middlewares/validateOwnerName.js";
import validatePetID from "../middlewares/validatePetId.js";
import checks from "../middlewares/validateConditions.js";
import validateEmail from "../middlewares/validateEmail.js";

const apiRouter= express.Router();

apiRouter.get('/getAllPets',apiController.getAll);
apiRouter.get('/getOne/:id',validatePetID,apiController.getOne);
apiRouter.get('/findByName/:petName',validatePetName,apiController.findByName);
apiRouter.get('/findByOwner/:petOwner',validateOwnerName,apiController.findByOwner);
apiRouter.get('/pendingPay',apiController.findByPendingPay);
apiRouter.get('/underTreatment',apiController.findByState);
apiRouter.post('/addPet',checks(),validateEmail,apiController.insertOne);
apiRouter.put('/editPet/:id',validatePetID,checks(),apiController.updateOne);
apiRouter.delete('/deletePet/:id',validatePetID,apiController.deleteOne);

export default apiRouter;



