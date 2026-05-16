import { Router } from "express";
import FlashcardController from "../controller/flashcards";

const flashcardsRouter = Router();

const flashcardController = new FlashcardController();

flashcardsRouter.get("/flashcards", (req, res) => flashcardController.getAll(req, res));
flashcardsRouter.post("/flashcards", (req, res) => flashcardController.create(req, res));
flashcardsRouter.put("/flashcards/:id", (req, res) => flashcardController.update(req, res));
flashcardsRouter.delete("/flashcards/:id", (req, res) => flashcardController.delete(req, res));

export default flashcardsRouter;
