import pet from "../models/pets.js";



const apiController= {
///Operaciones basicas CRUD///    
    async getAll(req,res){
        try {
            const petList= await pet.find();
            res.json(petList)
        } catch (err) {
            console.log("Error al obtener la informacion de la base de datos");
            res.status(404).send("Error al obtener la informacion de la base de datos")
        }
    },
    async insertOne (req,res){
        try {
            const newPet= new pet(req.body);
            await newPet.save();
            res.status(200).json(newPet);
        } catch (err) {
            res.status(404).send("Error al obtener la informacion de la base de datos");
        }
    },
    async updateOne(req,res){
        try {
            await pet.findByIdAndUpdate(req.params.id,req.body);
            const editPet= await pet.findById(req.params.id);
            res.status(201).json(editPet);
        } catch (err) {
            res.status(404).send("Error al obtener la informacion de la base de datos");
        }
    },
    async deleteOne(req,res){
        try {
            await pet.findByIdAndDelete(req.params.id);
            res.status(201).send("Mascota eliminada de la base de datos");
        } catch (err) {
            res.status(404).send("Error al obtener la informacion de la base de datos");
        }
    },
///consultas especificas:    
    async findByName(req,res){
        try {
            const getPet= await pet.find({petName:req.params.petName});
            res.json(getPet);
        } catch (err) {
            res.status(404).send("Error al obtener la informacion de la base de datos");
        }
    },
    async findByOwner(req,res){
        try {
            const getPet= await pet.find({petOwner:req.params.petOwner});
            res.json(getPet);
        } catch (err) {
            res.status(404).send("Error al obtener la informacion de la base de datos");
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
            res.status(404).send("Error al obtener la informacion de la base de datos");
        }
    },
    async findByPendingPay(req,res){
        try {
            const getPendingPay= await pet.find(
                {"ownerDetails.pendingPay":{$gt:0}},
                {
                    "petName":1,
                    "petOwner":1,
                    "ownerDetails.pendingPay":1,
                    "ownerDetails.email":1,
                    "ownerDetails.phoneNumber":1
                });
            res.json(getPendingPay);
        } catch (err) {
            res.status(404).send("Error al obtener la informacion de la base de datos").json(err)
        }
    }
}

export default apiController