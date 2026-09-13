import express, { type Express } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./configs/db";
import reactionRoute from "./routers/reactionRoute";

dotenv.config();

connectDB();

const app: Express = express();
app.use(express.json());
app.use(cookieParser());
app.set("trust proxy", 1);

app.use("/reaction", reactionRoute);

const PORT: number | string = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log("KEDT Server is running");
});
