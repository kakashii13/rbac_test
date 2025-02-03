import { NextFunction, Request, Response } from "express";
import RoleService from "../services/role.service";

class RoleController {
  static async createRole(req: Request, res: Response, next: NextFunction) {
    try {
      const { role } = req.body;

      if (await RoleService.createRole(role.name))
        res
          .status(200)
          .json({ status: 200, message: "Role created successfully." });
      else
        res.status(400).json({ status: 400, message: "Role already exist." });
    } catch (error) {
      next(error);
    }
  }

  static async getRole(req: Request, res: Response, next: NextFunction) {
    try {
      const role = await RoleService.getRole("admin");
      res.status(200).json(role);
    } catch (error) {
      next(error);
    }
  }
}

export default RoleController;
