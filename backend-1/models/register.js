import mongoose from "mongoose";
const Schema=mongoose.Schema

const regis=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})
export default mongoose.model("registration_details",regis)