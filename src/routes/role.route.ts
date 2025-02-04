import { NextFunction, Request, Response, Router } from "express";
import RoleController from "../controllers/role.controller";
import checkPermissions from "../middlewares/check_permissions.middleware";
import checkUser from "../middlewares/check_user.middleware";

const role_router = Router();

// El unico role que puede crear roles es el "admin"
role_router.post(
  "/role",
  // checkUser,
  // checkPermissions("role_create"), // <- check permissions of user role
  (req: Request, res: Response, next: NextFunction) => {
    RoleController.createRole(req, res, next);
  }
);

role_router.get(
  "/role/:name",
  // checkRole,
  // checkUser,
  // checkPermission,
  (req: Request, res: Response, next: NextFunction) => {
    RoleController.getRole(req, res, next);
  }
);

role_router.get(
  "/roles",
  // checkUser,
  // checkPermissions("role_viewer")
  (req: Request, res: Response, next: NextFunction) => {
    RoleController.getRoles(req, res, next);
  }
);

export default role_router;
