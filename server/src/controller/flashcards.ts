import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export default class FlashcardController {
    async getAll(req: Request, res: Response) {
        try {
            const flashcards = await prisma.flashcard.findMany();

            return res.status(200).json(flashcards);
        } catch (error) {
            return res.status(500).json({ message: "Erro ao listar tarefas" });
        }
    }
}
