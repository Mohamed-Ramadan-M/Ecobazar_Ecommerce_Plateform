import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config'
import morgan from "morgan"
import { dbConnection } from './config/database.js';
import { categoriesRouter } from './routes/category.route.js';

import dns from 'dns';
import { apiError } from './utils/apiErrorHandler.js';
import { globalErrorHandle } from './middlewares/errorMiddlewareHandle.js';
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);

// connecting to MongoDB
dbConnection()

// express app
const app = express();

//middlewares
app.use(morgan("dev"))
app.use(express.json());

//route
app.use("/api/v1/category", categoriesRouter)

app.all("*", (req, res, next) => {
    next(new apiError("cant find this route", 400))
})

// global middleware for handling all errors and return 500 error
app.use(globalErrorHandle);


app.get('/', (req: Request, res: Response) => {
    res.send('our API');
});



//listening server
const Port = process.env.PORT
const server = app.listen(Port, () => {
    console.log('server running in localhost://', Port);
})

// handling rejections outside express
process.on('unhandledRejection', (error: Error) => {
    console.error(`unhandledRejection Error : ${error.name} | ${error.message}`)
    server.close(() => {
        console.error(`shutting down ...`)
        process.exit(1) 
    })
})
