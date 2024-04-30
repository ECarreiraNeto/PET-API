import mongoose from "mongoose";

mongoose.set('strictQuery',false)

const connect= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log("Se conecto a la base de datos")
    } catch (err) {
        console.log("Error al conectarse a la base de datos");
    }
}

export default connect;