import { NextFunction } from "express";
/**
 * Si el usuario es admin, podra realizar todas las operaciones
 * Si el usuario es editor, podra crear, leer y actualizar usuarios, pero no crear user admin
 * Si el usuario es lector, podra leer los usuarios
 */

import { Request, Response } from "express";
import HttpException from "../utils/http_exception";
import UserService from "../services/user.service";

class UserController {
  static async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { user } = req.body;

      UserService.createUser(user.nickname, user.password, "admin");
    } catch (error) {
      console.log(error);
    }
  }

  static async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      throw new HttpException(400, "Error testing");
    } catch (error) {
      next(error);
    }
  }
  static async updateUser(req: Request, res: Response, next: NextFunction) {}
  static async deleteUser(req: Request, res: Response, next: NextFunction) {}
}

export default UserController;
