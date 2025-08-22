import path from "path";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MongoDB connection
const mongoUri =
  process.env.MONGODB_URI ||
  "mongodb+srv://bernardbyrnes:9CzCyU3ldmqPOLQn@sumtest.xwjd0mg.mongodb.net/SumTest?retryWrites=true&w=majority&appName=sumtest";

async function connectDB() {
  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
}

connectDB();

// Mongoose Model
import Submission from "./models/Submission.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

// Routes
app.use("/", productRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
