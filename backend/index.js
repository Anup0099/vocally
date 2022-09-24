import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
import authRoute from "./routes/Auth.js";

dotenv.config();
app.use(cors())
app.use(express.json());
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("dissconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

app.use("/api/auth", authRoute);
app.listen("5000", () => {
  connect();
  console.log("Server started on port 5000");
});
