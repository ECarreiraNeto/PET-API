import express from "express";
import apiController from "../controllers/apiControllers.js";

const apiRouter= express.Router();

apiRouter.get('/getAllPets',apiController.getAll);
apiRouter.get('/findByName/:petName',apiController.findByName);
apiRouter.get('/findByOwner/:petOwner',apiController.findByOwner);
apiRouter.get('/pendingPay',apiController.findByPendingPay);
apiRouter.get('/underTreatment',apiController.findByState);
apiRouter.post('/addPet',apiController.insertOne);
apiRouter.put('/editPet/:id',apiController.updateOne);
apiRouter.delete('/deletePet/:id',apiController.deleteOne);

export default apiRouter;



