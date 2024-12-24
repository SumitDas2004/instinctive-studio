import express from "express";
import {
  deleteStudent,
  createStudent,
  getStudents,
} from "../repository/student_repository.js";

const app = express.Router();

// Get list of students
app.get("/", async (request, response, next) => {
  try {
    const students = await getStudents();
    response.statusCode = 200;
    response.set({
      "Content-Type": "application/json",
    });
    response.send(
      JSON.stringify({
        message: "Success.",
        data: students,
      })
    );
  } catch (e) {
    next(e);
  }
});

// Create a student
app.post("/", async (request, response, next) => {
  try {
    const body = request.body;
    const student = await createStudent(body);
    response.status = 201;
    response.set({
      "Content-Type": "application/json",
    });
    response.send(
      JSON.stringify({
        message: "Student created successfully.",
        data: student,
      })
    );
  } catch (e) {
    next(e);
  }
});

// Delete a student
app.delete("/:rollNumber", async (request, response, next) => {
  try {
    const roll_number = request.params["rollNumber"];
    await deleteStudent(roll_number);
    response.status = 200;
    response.set({
      "Content-Type": "application/json",
    });
    response.send(
      JSON.stringify({
        message: "Student deleted successfully.",
      })
    );
  } catch (e) {
    next(e);
  }
});

export default app;
