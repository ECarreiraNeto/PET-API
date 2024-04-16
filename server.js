import app from "./app";
import { configDotenv } from "dotenv";

const port=process.env.PORT;
const dotenv= configDotenv;
dotenv.config();

app.listen(()=>{
    console.log(`App funcionando desde el puerto:${port}`)
})
