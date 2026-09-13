import express, { type Express } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./configs/db";

dotenv.config();

connectDB();

const app: Express = express();
app.use(express.json());
app.use(cookieParser());

const PORT: number | string = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log("KEDT Server is running");
});
