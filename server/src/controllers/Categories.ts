import { Request, Response } from "express";
import apiResponse from "../utils/ApiResponse";

// categorias fixas e pré-definidas
export const allowedCategories = [
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
];

export default class CategoryController {
    async getAll(req: Request, res: Response) {
        try {
            return apiResponse({
                res,
                message: "Categorias retornadas com sucesso.",
                success: true,
                data: { categories: allowedCategories }
            });
        } catch (error) {}
    }
}
