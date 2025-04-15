import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database Connetion Successfull 🚀");
    })
    .catch((err) => {
      console.log("Database ERROR:", err.message);
      process.exit(1);
    });
};

export default connectDB;
