import mongoose, { SchemaType } from "mongoose";
import mongoose from "../connection.js";
const Schema= mongoose.Schema;
const userSchema= new Schema({
    'email':{type:SchemaType.String, required:true, unique:true},
    'password':{type:SchemaType.String, reuired: true, minLength:0, maxLength:25},
    'name':{type:SchemaType.String, required: true},
    'phone':{type:SchemaType.String}
})

export const userModel= mongoose.model('user',userSchema);