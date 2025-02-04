import { NextFunction, Request, Response } from "express";
import PermissionService from "../services/permission.service";

class PermissionController {
  static async createPermission(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { permission } = req.body;

      if (await PermissionService.createPermission(permission)) {
        res
          .status(201)
          .json({ status: 201, message: "Permission created successfully." });
      } else {
        res
          .status(400)
          .json({ status: 400, message: "Permission already exist." });
      }
    } catch (error) {
      next(error);
    }
  }
  static async getPermissions(req: Request, res: Response, next: NextFunction) {
    try {
      const permissions = await PermissionService.getPermissions();
      res.status(200).json({ message: "List of permissions.", permissions });
    } catch (error) {
      next(error);
    }
  }
  static async deletePermission() {}
  static async updatePermission() {}
}

export default PermissionController;
