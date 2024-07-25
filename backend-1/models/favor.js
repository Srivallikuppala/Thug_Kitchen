import mongoose from "mongoose";
const Schema=mongoose.Schema

const favor=new Schema({
    name:{
        type:String,
        required:true
    },
    procedure:{
        type:String,
        required:true
    }

})
export default mongoose.model("favor",favor)