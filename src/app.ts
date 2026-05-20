// const express = require('express')

import { Request, Response } from "express";
import express from "express";
import cors from "cors";
// import router from "./app/route";
import globalErrorHandler from "./app/middlewares/globalErrorHandeler";
import notFound from "./app/middlewares/notFound";
import cookieParser from "cookie-parser";
import config from "./app/config";
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true})); // for ssl
app.use(cors({origin:['http://localhost:3000', ''], credentials:true}));
app.use(cookieParser())

// app.use("/api/v1", router)
// app.use("/api", router)

app.get('/', (req: Request , res : Response ) => {
  res.send({
    message: `${config.app_name} is running!`,
    environment: config.NODE_ENV,
    uptime: process.uptime().toFixed(2) + " sec",
    timeStamp:new Date().toISOString()
  })
})


app.use(globalErrorHandler);
app.use(notFound);

export default app;