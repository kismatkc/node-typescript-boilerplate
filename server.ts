import dotenv from "dotenv";
import express from "express";
import CORS from "cors";
import connectToDatabase from "./database.ts";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(CORS());
const PORT = process.env.port; // Corrected environment variable

if (!PORT) {
  throw new Error("Please provide a valid port");
}

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
