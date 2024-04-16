import express from "express";
import morgan from "morgan";
import connect from "./database/connect.js";
import { configDotenv } from "dotenv";
import apiRouter from "./routes/api.js";
import indexRouter from "./routes/index.js";

const app=express();
const port=process.env.PORT;
configDotenv()


app.use(morgan("dev"));
app.use(express.json());
app.use("/index", indexRouter);
app.use("/api", apiRouter);
connect()


app.listen(()=>{
    console.log(`App funcionando desde el puerto:${port}`)
})
