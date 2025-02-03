import { NextFunction, Request, Response } from "express";
import HttpException from "../utils/http_exception";

type User = {
  nickname: string;
  password: string;
};

function checkUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { user } = req.body;

    if (!user || !user.nickname || !user.password) {
      throw new HttpException(400, "You must give a nickname and password.");
    }

    next();
  } catch (error) {
    next(error);
  }
}

export default checkUser;
