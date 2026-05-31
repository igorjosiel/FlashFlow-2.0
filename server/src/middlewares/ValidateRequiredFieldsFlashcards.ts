import { Request, Response, NextFunction } from "express";
import apiResponse from "../utils/ApiResponse";
import HttpStatus from "../enums/HttpStatus";

export default function validateRequiredFieldsFlashcards(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { question, answer, category } = req.body;

  if (!question || !answer || !category) {
    return apiResponse({
      res,
      message: "Os campos pergunta, resposta e categoria do flashcard são obrigatórios.",
      success: false,
      statusCode: HttpStatus.BAD_REQUEST,
    });
  }

  next();
}
