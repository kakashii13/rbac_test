import { NextFunction, Request, Response } from "express";
import Role_service from "../services/role.service";

function checkPermissions(permission: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;

    const role_permissions = await Role_service.getPermissions(user?.role_id);

    // if(role_permissions.includes(permission)){

    // }
    next();
  };
}

export default checkPermissions;
