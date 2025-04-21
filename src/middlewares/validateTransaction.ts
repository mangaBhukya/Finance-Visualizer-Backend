import { Request, Response, NextFunction } from "express";

const ALLOWED_CATEGORIES = [
  "Food",
  "Transport",
  "Utilities",
  "Entertainment",
  "Health",
  "Shopping",
  "Rent",
  "Other",
];

export const validateTransaction = (req: Request, res: Response, next: NextFunction) => {
  const { amount, date, description, category } = req.body;

  const errors: string[] = [];

  if (amount === undefined || isNaN(amount) || Number(amount) <= 0) {
    errors.push("Amount must be a number greater than 0.");
  }

  if (!date || isNaN(Date.parse(date))) {
    errors.push("A valid date is required.");
  }

  if (!description || typeof description !== "string" || description.trim().length < 2) {
    errors.push("Description must be at least 2 characters.");
  }

  if (!category || !ALLOWED_CATEGORIES.includes(category)) {
    errors.push("Category must be one of the predefined values.");
  }

  if (errors.length > 0) {
    res.status(400).json({ success: false, errors });
    return 
  }

  next();
};
