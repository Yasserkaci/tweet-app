import mongoose from "mongoose";

const User = new mongoose.Schema({
    email:{type:String, required:true, unique:true},
    username:{type:String, required:true},
    password:{type:String, required:true},
})

const model = mongoose.model('users', User)

export default model