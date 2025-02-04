import { NextFunction, Request, Response, Router } from "express";
import PermissionController from "../controllers/permission.controller";
import checkPermissions from "../middlewares/check_permissions.middleware";

const permission_router = Router();

permission_router.get(
  "/permissions",
  // checkUser,
  // checkPermissions,
  (req: Request, res: Response, next: NextFunction) => {
    PermissionController.getPermissions(req, res, next);
  }
);
permission_router.post(
  "/permission",
  // checkUser,
  // checkPermissions("create_permission"),
  (req: Request, res: Response, next: NextFunction) => {
    PermissionController.createPermission(req, res, next);
  }
);
permission_router.put(
  "/permission",
  (req: Request, res: Response, next: NextFunction) => {}
);
permission_router.delete(
  "/permission",
  (req: Request, res: Response, next: NextFunction) => {}
);

export default permission_router;
