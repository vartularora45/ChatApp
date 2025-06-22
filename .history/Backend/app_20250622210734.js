import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./db/db.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
connectDb();

app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:5173",
  "https://chat-app-cyan-ten-50.vercel.app",
  "https://chatuapp.me",
  "https://www.chatuapp.me",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/message", messageRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the backend server");
});

export default app;
