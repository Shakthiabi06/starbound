const studentService = require("../services/student.service");

const createStudent = async (req, res) => {
  try {
    const {
      rollNumber,
      name,
      dob,
      department,
      semester,
      targetCGPA,
    } = req.body;

    if (!rollNumber || !name || !department || !semester) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    const student = await studentService.createStudent({
      rollNumber,
      name,
      dob,
      department,
      semester,
      targetCGPA,
    });

    res.status(201).json(student);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await studentService.getStudentById(
      req.params.id
    );

    if (!student) {
      return res.status(404).json({
        error: "Student not found",
      });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();

    res.json(students);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  createStudent,
  getStudentById,
  getAllStudents,
};