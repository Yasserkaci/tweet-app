import mongoose, { connect } from "mongoose";

const connectDB = async(port, uri, app)=> {
    try {
        await mongoose.connect(uri)
        app.listen(port, ()=>console.log(`conected to databse and sever up at port ${port}`) )
    } catch (error) {
        console.log(error)
    }
}

export default connectDB