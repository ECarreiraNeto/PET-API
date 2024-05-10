import express from 'express';
import userController from '../controllers/userControllers.js';
import userChecks from '../middlewares/userMiddlewares/validateConditions.js';
import validateUserEmail from '../middlewares/userMiddlewares/validateEmail.js';
import validateUserName from '../middlewares/userMiddlewares/validateUserName.js';

const userRouter= express.Router();

userRouter.post('/createUser',userChecks(),validateUserEmail,validateUserName,userController.createUser);
userRouter.get('/getUsers', userController.getUsers);
userRouter.delete('/deleteUser/:id',userController.deleteUser)


export default userRouter;