import mongoose, { connect } from "mongoose";

const connectDB = (port, uri, app)=> {
    try {
        mongoose.connect(uri).then(app.listen(port, ()=>console.log(`conected to databse and sever up at port ${port}`) ))
        
    } catch (error) {
        console.log(error)
    }
}

export default connectDB