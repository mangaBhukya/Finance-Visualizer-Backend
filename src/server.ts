import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./dbConfig/db";
import transactionRoutes from "./routes/transactionRoutes";
import budgetRoutes from "./routes/budgetRoutes"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

connectDB().then(()=> {
app.listen(PORT,()=> console.log(`server running on port ${PORT}`))

});

app.use("/api/transactions", transactionRoutes);
app.use("/api/budgets", budgetRoutes);

export default app;
