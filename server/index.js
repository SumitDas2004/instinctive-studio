import express from "express";
import bodyParser from "body-parser";
import { exceptionHandlerMiddleware } from "./middlewares/ExceptionHandler.js";
import studentRouter from './controller/student_controller.js'
import courseRouter from './controller/course_controller.js'
import cors from "cors"


export const app = express();

app.use(cors())
app.use(bodyParser.json());

// Exception handler middleware
app.use(exceptionHandlerMiddleware);
app.use("/student", studentRouter)
app.use("/utils", courseRouter)

const port = 8000

app.get("/", (req, res)=>{
    res.send("Hello world!")
})

app.listen(port, () => console.log(`Express server started on port: ${port}`));