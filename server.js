const app= require("./app");
require(`dotenv`).config();

const port=process.env.PORT;

app.listen(()=>{
    console.log(`App funcionando desde el puerto:${port}`)
})