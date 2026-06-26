const prisma = require("../utils/prisma");

const createStudent = async (studentData) => {
  return prisma.student.create({
    data: studentData,
  });
};

const getStudentById = async (id) => {
  return prisma.student.findUnique({
    where: { id },
  });
};

const getAllStudents = async () => {
  return prisma.student.findMany();
};

module.exports = {
  createStudent,
  getStudentById,
  getAllStudents,
};