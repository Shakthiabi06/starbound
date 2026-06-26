const express = require("express");
const router = express.Router();

const {
  createStudent,
  getStudentById,
  getAllStudents,
} = require("../controllers/student.controller");

router.post("/", createStudent);

router.get("/", getAllStudents);

router.get("/:id", getStudentById);

module.exports = router;