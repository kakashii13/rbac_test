import { NextFunction, Request, Response, Router } from "express";
import RoleController from "../controllers/role.controller";

const role_router = Router();

role_router.post("/role", (req: Request, res: Response, next: NextFunction) => {
  RoleController.createRole(req, res, next);
});

role_router.get("/role", (req: Request, res: Response, next: NextFunction) => {
  RoleController.getRole(req, res, next);
});

export default role_router;
