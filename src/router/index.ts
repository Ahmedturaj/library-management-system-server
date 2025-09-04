import express from "express";
import userRouter from "../app/modules/user/user.router";
import bookRouter from "../app/modules/book/book.router";
import path from "path";
import borrowRouter from "../app/modules/borrow/borrow.router";


const router = express.Router();

// Proper structure for route modules
const moduleRouter = [  
  {
    path: "/user",
    router: userRouter
  },
  {
    path:"/book",
    router:bookRouter
  },
  {
    path:"/borrow",
    router:borrowRouter
  }
];

// Register all routes
moduleRouter.forEach((route) => {
  router.use(route.path, route.router);
});

export default router;
