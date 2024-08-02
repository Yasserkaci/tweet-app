// imports
import express from "express"
import "dotenv/config"
import cors from "cors"

// importing modules
import connectDB from "./utils/conetctDB.js"
import router from "./routes/userRouter.js"

// constans
const app = express()
const port = process.env.PORT
const mongo_uri = process.env.MONGO_URI

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use("/api/users", router)


// starting the server
connectDB(port, mongo_uri, app)

