import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import passport from "./middlewares/google.middleware.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
dotenv.config();

const app = express();

connectDB();

app.use(
    cors({
        origin: `${process.env.FRONTEND_URL}`, // frontend URL
        credentials: true, // allow cookies
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());

//------------------------------------------------------------------------------------------

app.use("/", authRouter);

export default app;
