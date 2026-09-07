import express, { type Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
require("dotenv/config").config();

const app: Express = express();
app.use(cookieParser());
app.use(cors());

const PORT: number | string = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("KEDT Server has been runned");
});