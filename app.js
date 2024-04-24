import express from "express";
import morgan from "morgan";
import connect from "./database/connect.js";
import apiRouter from "./routes/api.js";
import indexRouter from "./routes/index.js";


const app=express();


app.use(morgan('dev'));
app.use(express.json());
app.use('/index',indexRouter)
app.use('/api', apiRouter);
connect()


export default app;