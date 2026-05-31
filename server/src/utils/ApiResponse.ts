import { Response } from "express";
import HttpStatus from "../enums/HttpStatus";

type ApiResponseParams<T> = {
  res: Response;
  statusCode?: HttpStatus;
  success: boolean;
  message: string;
  data?: T;
};

export default function apiResponse<T>({
  res,
  statusCode = HttpStatus.OK,
  success,
  message,
  data
}: ApiResponseParams<T>) {
  return res.status(statusCode).json({
    success,
    message,
    data
  });
}
