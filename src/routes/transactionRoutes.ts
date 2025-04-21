import express from "express";
import {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from "../controllers/transactionController";
import { validateTransaction } from "../middlewares/validateTransaction";

const router = express.Router();

router.get("/", getTransactions);
router.post("/", validateTransaction, createTransaction);
router.put("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);

export default router;
