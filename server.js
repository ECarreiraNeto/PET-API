import app from "./app.js";
import { configDotenv } from "dotenv";

configDotenv();
const port=process.env.PORT || 8080;



app.listen(port,()=>{
    console.log(`App funcionando desde: http://localhost:${port}`)
})