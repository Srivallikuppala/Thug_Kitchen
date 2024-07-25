import mongoose from "mongoose";
const Schema = mongoose.Schema

const student = new Schema({
    Name:{
        type:String,
        required:true
    },
    Recipe:{
        type:String,
        required:true
    },
    Number:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    }
});
export default mongoose.model("student",student);