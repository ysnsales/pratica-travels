import express, { Router } from "express";
import httpStatus from "http-status";
import cors from "cors";
import travelRouter from "./routes/travels.routes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(travelRouter);

app.get("/health", (req, res) => res.sendStatus(httpStatus.OK));

app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
})