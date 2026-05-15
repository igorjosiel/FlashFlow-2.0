import { env } from "node:process";
import app from "./app";

const PORT = env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/api/todos`);
});
