import mongoose from "mongoose";
const Schema=mongoose.Schema
const recipe =new Schema({
    name:{
        type:String,
        required:true
    },    
    procedure:{
        type:String,
        required:true
    },
    productpic:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    }
   
})
export default  mongoose.model('recipe',recipe)