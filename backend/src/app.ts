import express, { Application } from "express";
import cors from "cors";
import searchRoutes from "./routes/search";
import apiClient from "./shared/apiClient";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/api/search", searchRoutes);

apiClient.init();

export default app;
