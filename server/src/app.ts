import Express from "express";
import cors from "cors";
import flashcardsRouter from "./routes/flashcards";
import categoriesRouter from "./routes/categories";

const app = Express();

// middlewares
app.use(Express.json());
app.use(cors());

// rotas
app.use(flashcardsRouter);
app.use(categoriesRouter);

export default app;
