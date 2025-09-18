import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const MONGODB_URL = "mongodb+srv://delaksan_db_user:Fq21lcKcCa7PuxTq@aidf5.fjlz6j5.mongodb.net/?retryWrites=true&w=majority&appName=AIDF5";
        if (!MONGODB_URL) {
            throw new Error("MONGODB_URL is not defined");
        }
        await mongoose.connect(MONGODB_URL);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
}

export default connectDB;