import { Router } from "express";
import CategoryController from "../controller/Categories";

const categoriesRouter = Router();

const categoryController = new CategoryController();

categoriesRouter.get("/categories", (req, res) => categoryController.getAll(req, res));

export default categoriesRouter;
