import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { forgot_password, getProfile, login, register } from "./controllers/user.applicant.controller.js";
import db from "./database/db.js";
import { authentication } from "./middleware/auth.middleware.js";

dotenv.config();

const app = express();

db.connect();

app.use(express.json());
app.use(cors());

app.post("/auth/register", register);
app.post("/auth/login", login);
app.post("/auth/forgot_password", forgot_password);
app.get("/auth/get-profile", authentication, getProfile);

app.listen(8000, () => {
  console.log("Express app started at port 8000");
});
