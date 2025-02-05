import { NextFunction, Request, Response } from "express";
import HttpException from "../utils/http_exception";

function checkUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { user } = req.body;

    if (!user || !user.nickname) {
      throw new HttpException(400, "You must give a nickname.");
    }

    next();
  } catch (error) {
    next(error);
  }
}

export default checkUser;
