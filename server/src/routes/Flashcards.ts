import { Router } from "express";
import FlashcardController from "../controllers/Flashcards";
import validateRequiredFieldsFlashcards from "../middlewares/ValidateRequiredFieldsFlashcards";

const flashcardsRouter = Router();

const flashcardController = new FlashcardController();

flashcardsRouter.get("/flashcards", (req, res) => flashcardController.getAll(req, res));
flashcardsRouter.post("/flashcards", validateRequiredFieldsFlashcards, (req, res) => flashcardController.create(req, res));
flashcardsRouter.put("/flashcards/:id", validateRequiredFieldsFlashcards, (req, res) => flashcardController.update(req, res));
flashcardsRouter.delete("/flashcards/:id", (req, res) => flashcardController.delete(req, res));

export default flashcardsRouter;
