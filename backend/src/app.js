const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/student.routes");
const testRoutes = require("./routes/test.routes");

const app = express();

app.use("/api/test", testRoutes);
app.use(cors());
app.use(express.json());
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Starbound backend running 🚀" });
});

module.exports = app;