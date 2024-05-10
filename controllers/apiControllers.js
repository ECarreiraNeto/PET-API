import pet from "../models/pets.js";



const apiController= {
///Querys basicas CRUD///    
    async getAll(req,res){
        try {
            const petList= await pet.find();
            if(petList.length===0){
                res.json({
                    msg:"No hay mascotas registradas en la base de datos"
                })
            }else{
                res.status(200).json(petList)
            }
        } catch (err) {
            res.status(404).json({
                msg:"Error al conectarse a la base de datos"
            })
        }
    },
    async getOne (req,res){
        try {
            const getOne= await pet.findById(req.params.id);
            res.json(getOne);
        } catch (err) {
            res.status(404).json({
                msg:"Error al conectarse a la base de datos"
            })
        }
    },
    async insertOne (req,res){
        try {
            const newPet= new pet(req.body);
            await newPet.save();
            res.status(200).send("Mascota ingresada a la base de datos");
        } catch (err) {
            res.status(404).json({
                msg:"Error al conectarse a la base de datos"
            })
        }
    },
    async updateOne(req,res){
        try {
            await pet.findByIdAndUpdate(req.params.id,req.body);
            const editPet= await pet.findById(req.params.id);
            res.status(201).json(editPet).send("Registro editado con exito");
        } catch (err) {
            res.status(404).json({
                msg:"Error al conectarse a la base de datos"
            })
        }
    },
    async deleteOne(req,res){
        try {
            await pet.findByIdAndDelete(req.params.id);
            res.status(201).send("Mascota eliminada de la base de datos");
        } catch (err) {
            res.status(404).json({
                msg:"Error al conectarse a la base de datos"
            })
        }
    },
///Querys especificas///:    
    async findByName(req,res){
        try {
            const getPet= await pet.find(
                {petName:req.params.petName},
                {
                    "petName":1,
                    "petOwner":1,
                    "ownerDetails":1
                });
            res.json(getPet);
        } catch (err) {
            res.status(404).json({
                msg:"Error al conectarse a la base de datos"
            })
        }
    },
    async findByOwner(req,res){
        try {
            const getPet= await pet.find(
                {petOwner:req.params.petOwner},
                {
                    "ownerDetails":1,
                    "petName":1
                }
            
                );
            res.json(getPet);
        } catch (err) {
            res.status(404).json({
                msg:"Error al conectarse a la base de datos"
            })
        }
    },
    async findByState(req,res){
        try{
            const getState= await pet.find(
                {"petDetails.underTreatment":true},
                {
                    "petName":1,
                    "petDetails.age":1,
                    "petDetails.details":1,
                });
            res.json(getState);
        } catch (err) {
            res.status(404).json({
                msg:"Error al conectarse a la base de datos"
            })
        }
    },
    async findByPendingPay(req,res){
        try {
            const getPendingPay= await pet.find(
                {"ownerDetails.pendingPay":{$gt:0}},
                {
                    "petName":1,
                    "petOwner":1,
                    "ownerDetails":1
                });
            res.json(getPendingPay);
        } catch (err) {
            res.status(404).json({
                msg:"Error al conectarse a la base de datos"
            })
        }
    }
}

export default apiController