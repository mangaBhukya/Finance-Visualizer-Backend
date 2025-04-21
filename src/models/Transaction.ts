import mongoose, { Document } from "mongoose";

export interface ITransaction extends Document {
  amount: number;
  date: string;
  description: string;
  category: string;
}

const transactionSchema = new mongoose.Schema<ITransaction>({
  amount: { type: Number, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
});

export const Transaction = mongoose.model<ITransaction>("Transaction", transactionSchema);
