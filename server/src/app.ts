import Express from "express";
import cors from "cors";
import flashcardsRouter from "./routes/Flashcards";
import categoriesRouter from "./routes/Categories";

const app = Express();

// middlewares
app.use(Express.json());
app.use(cors());

// rotas
app.use(flashcardsRouter);
app.use(categoriesRouter);

export default app;
