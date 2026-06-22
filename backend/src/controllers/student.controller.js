const prisma = require("../utils/prisma");

const createStudent = async (req, res) => {
  try {
    const { rollNumber, dob, department, semester, targetCGPA } = req.body;

    const student = await prisma.student.create({
      data: {
        rollNumber,
        dob,
        department,
        semester,
        targetCGPA,
      },
    });

    res.status(201).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to create student",
    });
  }
};

module.exports = {
  createStudent,
};