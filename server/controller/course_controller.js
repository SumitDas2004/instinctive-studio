import express from "express";
import { getCohorts, getCourses } from "../repository/course_repository.js";

const app = express.Router();

app.get("/courses", async (request, response, next) => {
  try {
    const courses = await getCourses();
    response.statusCode = 200;
    response.set({
      "Content-Type": "application/json",
    });
    response.send(
      JSON.stringify({
        message: "Success.",
        data: courses,
      })
    );
  } catch (e) {
    next(e);
  }
});

app.get("/cohorts", async (request, response, next) => {
  try {
    const cohorts = await getCohorts();
    response.statusCode = 200;
    response.set({
      "Content-Type": "application/json",
    });
    response.send(
      JSON.stringify({
        message: "Success.",
        data: cohorts,
      })
    );
  } catch (e) {
    next(e);
  }
});

export default app;
