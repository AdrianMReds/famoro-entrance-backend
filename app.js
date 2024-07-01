import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import auth from "./routes/auth.js";

const app = express();
app.use(express.json(), cors(), cookieParser());
app.use("/auth", auth);

const httpServer = http.createServer(app);

export default httpServer;
