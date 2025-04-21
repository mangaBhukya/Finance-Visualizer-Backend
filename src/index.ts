import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./dbConfig/db";
import transactionRoutes from "./routes/transactionRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());


app.use("/api/transactions", transactionRoutes);


(async function startServer() {
  try {
    await connectDB();
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1); 
  }
})();
