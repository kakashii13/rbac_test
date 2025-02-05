import { NextFunction, Request, Response } from "express";
import Role_service from "../services/role.service";
import HttpException from "../utils/http_exception";

function checkPermissions(permission: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user } = req.body;
      console.log(user);

      // Obtengo el listado de permisos para el rol del usuario
      const role_permissions = await Role_service.getPermissions(user.role.id);

      console.log("checkPermission middleware ->", role_permissions);

      if (role_permissions.includes(permission)) {
        console.log("es el admin");
      } else {
        throw new HttpException(403, "Unauthorized.");
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}

export default checkPermissions;
