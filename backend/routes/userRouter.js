import express from "express"

import { registerUser, loginUser } from "../contollers/userControllers.js"

const router = express.Router()

//login router
router.post("/login", loginUser)

//register router
router.post("/register", registerUser)


export default router