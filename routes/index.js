import express from "express";
import index from "../controllers/indexController.js";

const indexRouter= express.Router();

indexRouter.get('/welcome', index);

export default indexRouter;


