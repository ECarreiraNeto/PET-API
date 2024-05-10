import { Schema, model } from "mongoose";

const schema= new Schema({
    userName:{type:String,require:true},
    userPassword: {type:String,require:true},
    email: {type: String, require:true}
})

const user= model('user',schema);

export default user;