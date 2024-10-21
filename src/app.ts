import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json()); //permite que a aplicação entenda requisições em formato JSON
app.use(routes)

app.listen(3000, () => {
  console.log("server running on port 3000");
});
