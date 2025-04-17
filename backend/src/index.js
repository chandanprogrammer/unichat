import app from "./app.js";
import dotenv from "dotenv";
import { Server } from "socket.io";
import connectDB from "./db/connect-db.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 5001;

// Server health check
app.get("/ping", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Ping Successful",
  });
});

connectDB();

const server = app.listen(port, () =>
  console.log(`⚙️  Server is running at url http://localhost:${port}`)
);

const io = new Server(server, {
  cors: {
    origin: "https://unichat-server-five.vercel.app",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});
