import express from "express";
import AuthRoute from "./routes/auth.route";
import dotenv from "dotenv";
import { connectDB } from "./lib/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use("/api/auth", AuthRoute);

app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
  connectDB();
});
