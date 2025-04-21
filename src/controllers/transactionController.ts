import { Request, Response } from "express";
import { Transaction } from "../models/Transaction";

export const getTransactions = async (_: Request, res: Response) => {
  const transactions = await Transaction.find().sort({ date: -1 });
  res.json(transactions);
};

export const createTransaction = async (req: Request, res: Response) => {
  const transaction = new Transaction(req.body);
  await transaction.save();
  res.status(201).json(transaction);
};

export const updateTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await Transaction.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

export const deleteTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Transaction.findByIdAndDelete(id);
  res.json({ success: true });
};
