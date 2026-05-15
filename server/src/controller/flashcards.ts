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

    async create(req: Request, res: Response) {
        try {
            const { question, answer, category } = req.body;

            if (!question || !answer || !category) {
                return res.status(400).json({
                    message: "Os campos pergunta, resposta e categoria do flashcard são obrigatórios."
                });
            }

            const flashcard = await prisma.flashcard.create({
                data: {
                    question,
                    answer,
                    category,
                }
            });

            return res.status(201).json(flashcard);
        } catch (error) {
            return res.status(500).json({ message: "Erro ao criar a tarefa" });
        }
    }
}
