import express from "express";
import dotEnv from "dotenv";
dotEnv.config();

console.log("host", process.env.PORT)

const app = express();

app.listen(process.env.PORT, () =>{
    console.log(`Server is running on :${process.env.HOST}: ${process.env.PORT}`);
})