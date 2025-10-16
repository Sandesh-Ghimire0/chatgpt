import express from "express";
import expressProxy from "express-http-proxy";
import { authUser } from "./middlewares/auth.middleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

import dotenv from "dotenv";
dotenv.config();

export const app = express();

app.use(
    cors({
        origin: `${process.env.FRONTEND_URL}`, // frontend URL
        credentials: true, // allow cookies
    })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", expressProxy(`${process.env.AUTH_SERVICE_URL}`));
app.use(
    "/api/v1/chat",
    createProxyMiddleware({
        target: `${process.env.CHAT_SERVICE_URL}`,
        changeOrigin: true,
        selfHandleResponse: false, // <- Important for SSE
        pathRewrite: {
            "^/api/v1/chat": "",
        },
        onProxyReq: (proxyReq, req, res) => {
            if (req.headers.cookie) {
                proxyReq.setHeader("cookie", req.headers.cookie);
            }
        },
    })
);

export default app;
