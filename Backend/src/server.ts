import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";
require("dotenv/config").config();

const app = express();
app.use(cookieParser());

const PORT: number | string = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("KEDT Server has been runned");
});