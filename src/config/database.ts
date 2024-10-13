import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectToDatabase = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Connected to mongoDB");
    } catch (error) {
        console.error("Failed to connect to database", error)
    }
};
