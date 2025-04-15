import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config({
  path: "./.env",
});

app.use(
  cors({
    origin: process.env.ORIGIN_URL,
    methods: ["GET", "POST", "DELETE", "OPTIONS", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());

// import routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messages.routes.js";

// set routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/messages", messageRoutes);

export default app;
