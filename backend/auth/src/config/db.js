import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const connectionInstance =await mongoose.connect(`${process.env.MONGODB_ATLAS_URI}/${process.env.ATLAS_DB_NAME}`)
        console.log('\nMongoDB connected :: DB host :: ',connectionInstance.connection.host)
    } catch (error) {
        console.log("MongoDB connection failed : ", error)
        process.exit(1)
    }
}

export { connectDB };

