import Express from "express";
import cors from "cors";

const app = Express();

app.use(Express.json());
app.use(cors());

//rotas

//rota check

app.get("/api", (req, res) => {
    res.json({ message: "API todo list" })
});

export default app;
