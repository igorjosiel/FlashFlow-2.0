import Express from "express";
import cors from "cors";
import routerFlashcards from "./routes/flashcards";

const app = Express();

// middlewares
app.use(Express.json());
app.use(cors());

// rotas
app.use(routerFlashcards);

export default app;
