import { Router } from "express";
import FlashcardController from "../controller/flashcards";

const routerFlashcards = Router();

const flashcardController = new FlashcardController();

routerFlashcards.get("/flashcards", (req, res) => flashcardController.getAll(req, res));

export default routerFlashcards;
