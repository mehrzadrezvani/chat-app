import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db";
import cookieParser from "cookie-parser";
import AuthRoute from "./routes/auth.route";
import MessageRoute from "./routes/message.route";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.BASE_FE_URL, credentials: true }));
app.use("/api/auth", AuthRoute);
app.use("/api/messages", MessageRoute);

app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
  connectDB();
});
