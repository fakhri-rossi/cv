import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";

dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Succeed get /");
});

app.listen(process.env.PORT);
