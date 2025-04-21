# ⚙️ Finance-Visualizer Backend

This is the **backend API** for the Personal Finance Visualizer app. It provides endpoints for managing transactions, categories, and budgets using **Node.js**, **Express**, **TypeScript**, and **MongoDB**.

---

## Features

- **Transactions**  
  - Create, read, update, delete (CRUD)  
  - Server‑side validation  
- **Categories**  
  - Return predefined list of categories  
- **Budgets**  
  - CRUD budgets per category  
- **Error handling**  
  - Unified error responses  
- **CORS** enabled for frontend integration  

---

## Tech Stack

- **Runtime**: Node.js (v18+)  
- **Framework**: Express.js  
- **Language**: TypeScript  
- **Database**: MongoDB (Mongoose ODM)  
- **Validation**: Custom middleware  
- **Dev Tools**: ts-node-dev, nodemon  

---

## Getting Started

### 1. Clone the repo

git clone

cd finance-backend

## Install Dependencies
- npm install
## Run the Development Server
- npm run dev

## API Endpoints

### Transactions
## Transactions API

| Method | Endpoint                   | Description                       |
| ------ | -------------------------- | --------------------------------- |
| GET    | `/api/transactions`        | Fetch all transactions            |
| POST   | `/api/transactions`        | Create a new transaction          |
| PUT    | `/api/transactions/:id`    | Update a transaction by its ID    |
| DELETE | `/api/transactions/:id`    | Delete a transaction by its ID    |



---

## Middleware

### `validateTransaction`
Validates transaction payloads on `POST` and `PUT` requests:
- **amount**: must be a number > 0  
- **date**: must be a valid date string  
- **description**: non‐empty, min 2 characters  
- **category**: one of the predefined list  


