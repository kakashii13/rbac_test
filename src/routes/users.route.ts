import { Router } from "express";
import { NextFunction, Request, Response } from "express";
import UserController from "../controllers/user.controller";
import checkUser from "../middlewares/check_user.middleware";

const user_router = Router();

// create
user_router.post(
  "/user",
  checkUser,
  (req: Request, res: Response, next: NextFunction) => {
    UserController.createUser(req, res, next);
  }
);

// read
user_router.get("/users", (req: Request, res: Response, next: NextFunction) => {
  UserController.getUsers(req, res, next);
});

// update
user_router.put(
  "/user/:id",
  (req: Request, res: Response, next: NextFunction) => {}
);

// delete
user_router.delete(
  "/user/:id",
  (req: Request, res: Response, next: NextFunction) => {}
);

export default user_router;
