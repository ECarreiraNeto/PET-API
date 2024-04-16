import express from "express";
import { ExpressValidator } from "express-validator";
import morgan from "morgan";


const app=express();


app.use(morgan("dev"));
app.use(express.json());