import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
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
