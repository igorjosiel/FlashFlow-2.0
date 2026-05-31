import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import apiResponse from "../utils/ApiResponse";
import HttpStatus from "../enums/HttpStatus";
import { allowedCategories } from "./Categories";

export default class FlashcardController {
    async getAll(req: Request, res: Response) {
        const category = typeof req.query.category === 'string' ? req.query.category : undefined;

        try {
            const flashcards = await prisma.flashcard.findMany({
                where: {
                    category
                }
            });

            return apiResponse({
                res,
                success: true,
                message: flashcards.length > 0 ? "Flashcards retornados com sucesso." : "Nenhum flashcard encontrado.",
                data: { flashcards }
            });
        } catch (error) {}
    }

    async verifyFlashcardAlreadyExists(id: number, res: Response) {
        const flashcardExists = await prisma.flashcard.findUnique({
            where: { id: id }
        });

        if (!flashcardExists) {
            return apiResponse({
                res,
                success: false,
                message: "Flashcard não encontrado.",
                statusCode: HttpStatus.NOT_FOUND,
            });
        }

        return;
    }

    async create(req: Request, res: Response) {
        try {
            const { question, answer, category } = req.body;

            if (!allowedCategories.includes(category)) {
                return res.status(400).json({
                    message: "Categoria inválida.",
                    allowedCategories
                });
            }

            const newFlashcard = await prisma.flashcard.create({
                data: {
                    question,
                    answer,
                    category,
                }
            });

            return apiResponse({
                res,
                success: true,
                message: "Flashcard cadastrado com sucesso.",
                statusCode: HttpStatus.CREATED,
                data: { newFlashcard }
            });
        } catch (error) {}
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { question, answer, category } = req.body;

            if (!allowedCategories.includes(category)) {
                return res.status(400).json({
                    message: "Categoria inválida.",
                    allowedCategories
                });
            }

            await this.verifyFlashcardAlreadyExists(Number(id), res);

            const updatedFlashcard = await prisma.flashcard.update({
                where: { id: Number(id) },
                data: {
                    question,
                    answer,
                    category,
                }
            });

            return apiResponse({
                res,
                success: true,
                message: "Flashcard atualizado com sucesso.",
                data: { updatedFlashcard },
            });
        } catch (error) {}
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            await this.verifyFlashcardAlreadyExists(Number(id), res);

            await prisma.flashcard.delete({
                where: { id: Number(id) }
            });

            return apiResponse({
                res,
                message: "Flashcard removido com sucesso.",
                success: true,
            });
        } catch (error) {}
    }
}
