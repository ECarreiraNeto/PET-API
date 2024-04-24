
const index= (req,res)=>{
    try {
        console.log("Bienvenido al sistema de registro veterinario")
        res.send("Bienvenido al sistema de registro veterinario")
    } catch (err) {
        console.log("Error al ingresar al sistema");
        res.status(404).send(err)
    }
}

export default index;