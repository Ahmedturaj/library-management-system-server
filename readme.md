#  Library Management API

A Library Management System built with **Express.js**, **TypeScript**, and **MongoDB (Mongoose)**.  
This project provides APIs to manage books and borrowing operations with proper schema validation, business rules, middleware, and aggregation pipelines.  

---

## 🚀 Features
-  **Book Management** (Create, Read, Update, Delete)  
-  **Borrow Management** with business logic (availability check, quantity deduction)  
-  **Mongoose Middleware** for lifecycle hooks (`pre`, `post`)  
-  **Static & Instance Methods** for custom logic  
-  **Aggregation Pipeline** for borrowed books summary  
-  **Filtering & Sorting** on books endpoint  
-  **Centralized Error Handling** with consistent response format  
-  Built using **Express + TypeScript + MongoDB**  

---

##  Tech Stack
- **Backend Framework:** [Express.js](https://expressjs.com/)  
- **Language:** [TypeScript](https://www.typescriptlang.org/)  
- **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)  
- **Deployment:** [Vercel](https://vercel.com/)

---

## ⚙️ Installation & Setup



### 1️   Clone Repository
```bash
git clone https://github.com/Ahmedturaj/library-management-system-server
cd library-management-system-server
2️ Install Dependencies
bash
Copy code
npm install
3️ Setup Environment Variables

Create a .env file in the root directory:

env
Copy code
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/libraryDB

4️ Run in Development
bash
Copy code
npm run dev

5️ Build & Run in Production
bash
Copy code
npm run build
npm start

Postman documentation Link: https://documenter.getpostman.com/view/44906671/2sB3HjNh69

vercel live link : https://lirary-management-system-backend.vercel.app/