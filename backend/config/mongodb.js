import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`, {
        });

        mongoose.connection.on('connected', () => {
            console.log(" DB Connected");
        });
        
    } catch (error) {
        console.error(" MongoDB connection error:", error.message);
        process.exit(1); // Exit the app if DB connection fails
    }
}

export default connectDB;
