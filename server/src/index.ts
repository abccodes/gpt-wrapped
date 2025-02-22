import express, { Express } from "express";
import cors from "cors";
import { PORT } from "./config/dotenvConfig";
import uploadRoutes from "./routes/uploadRoutes";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api", uploadRoutes);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
