import { Request, Response } from "express";

export default class CategoryController {
    async getAll(req: Request, res: Response) {
        try {
            res.status(200).json({
                data: {
                    // categorias fixas e pré-definidas
                    categories: [
                        "Javascript",
                        "React",
                        "Node",
                        "Angular",
                        "vuejs",
                        "Typescript",
                        "Prisma",
                        "Sequelize",
                        "knex",
                        "TypeORM",
                        "Next",
                        "Nest"
                    ]
                }
            })
        } catch (error) {
            return res.status(500).json({ message: "Erro ao listar as categorias" });
        }
    }
}
