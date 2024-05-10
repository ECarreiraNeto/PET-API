import user from "../models/users.js";

const userController= {
    async createUser (req,res){
        try {
            const newUser= new user(req.body);
            await newUser.save();
            res.status(200).send("Usuario creado");
        } catch (err) {
            res.status(404).json({
                msg:"Error al conectarse a la base de datos"
            })
        }
    },
    async getUsers(req,res){
        try {
            const getUsers= await user.find()
            if (getUsers.length===0){
                res.status(200).json({
                    msg:"No hay usuarios registrados"
                })
            } else{
                res.status(200).json(getUsers);
            }
        } catch (err) {
            res.status(404).json({
                msg:"Error al conectarse a la base de datos"
            })
        }
    },
    async deleteUser (req,res){
        try {
            await user.findByIdAndDelete(req.params.id);
            res.status(200).json({
                msg:"Usuario eliminado"
            })
        } catch (err) {
            res.status(404).json({
                msg:"Error al conectarse a la base de datos"
            })
        }
    }

}

export default userController;