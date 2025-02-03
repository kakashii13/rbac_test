import { Request, NextFunction, Response } from "express";
import HttpException from "../utils/http_exception";

interface ErrorProps extends HttpException {
  parent?: {
    detail?: string;
  };
}

function handleErrors(
  error: ErrorProps,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = error.errorCode || 500;
  const message = error.message || "Internal server error";

  const detail = error.parent?.detail;

  res
    .status(statusCode)
    .json({ status: statusCode, message: detail || message });
}

export default handleErrors;
