import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./database/db.js";
import { login, register } from "./controllers/user.applicant.controller.js";

dotenv.config();

const app = express();

db.connect();

app.use(express.json());
app.use(cors());

app.post("/auth/register", register);
app.post("/auth/login", login);

app.listen(process.env.PORT, () => {
  console.log("Express app started at port 8000");
});
