//imports
import model from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

//register controller

const registerUser = async(req, res)=>{
    const {username, email, password} = req.body
    
    if(!username||!email||!password){
        res.status(400).json({error:"all inputes must be filled"})
        return 0 
    }

    const exist = await model.findOne({email})

    if(exist){
        res.status(400).json({error:"email already used"})

        return exist
    }
        
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const secret = process.env.SECRET

    try {
        const user = await model.create({email, username, password:hash})
        const token =  jwt.sign({_id:user._id}, secret, {expiresIn:"3d"})
        res.status(200).json({email:user.email, token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
    
}

const loginUser = async(req, res)=>{
    const { email, password} = req.body
    
    if(!email||!password){
        res.status(400).json({error:"all inputes must be filled"})
        return 0 
    }
    const user = await model.findOne({email})
    const secret = process.env.SECRET

    if(!user){
        res.status(400).json({error:"user does not exist"})

        return exist
    }
    const exist = await bcrypt.compare(password,user.password)
    if(!exist){
        res.status(401).json({error:"wrong password"})
    }else{
        const token =  jwt.sign({_id:user._id}, secret, {expiresIn:"3d"})
        res.status(200).json({email:user.email, token})
    }


}

export {loginUser, registerUser}