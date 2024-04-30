import { Schema, model } from "mongoose";

const schema= new Schema({
    petName: {type:String,require:true},
    petOwner: {type:String,require:true},
    ownerDetails:{
        phoneNumber: {type: Number, require: true, unique:true},
        email: {type: String, unique:true},
        pendingPay: {type: Number, default: null}
    },
    petDetails: {
        type: {type: String, require:true},
        animalBreed: {type: String, require: true},
        gender: {type:String,required:true},
        age: {type: String, require: true},
        details: {type:[String]},
        lastVisit: {type: Date, default: Date.now()},
        underTreatment: {type: Boolean, default: false, required: true}
    }
})

const pet= model('pet',schema);

export default pet;