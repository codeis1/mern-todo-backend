import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import routes from "./routes/ToDoRoutes.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected To MongoDB Successfully`))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
