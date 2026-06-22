const express = require("express");
const router = express.Router();
const prisma = require("../utils/prisma");

console.log("Test routes loaded");

router.get("/", async (req, res) => {
  try {
    const result = await prisma.$queryRaw`SELECT NOW()`;

    res.json({
      success: true,
      database: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;