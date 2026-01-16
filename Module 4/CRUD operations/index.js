import express from "express";
import fs from "fs";
const app = express();
const port = 5000;
app.use(express.json());

app.get("/students", (req, res) => {
  const rawData = fs.readFileSync("./db.json", "utf-8");
  const parsedData = JSON.parse(rawData);
  res.json({
    message: "Students list",
    data: parsedData.students
  });
});

app.post("/students", (req, res) => {
  const rawData = fs.readFileSync("./db.json", "utf-8");
  const parsedData = JSON.parse(rawData);
  const students = parsedData.students;
  const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;
  const newStudent = {
    id: newId,
    name: req.body.name,
    course: req.body.course,
    year: req.body.year
  };
  students.push(newStudent);
  fs.writeFileSync("./db.json", JSON.stringify(parsedData, null, 2));
  res.json({
    message: "Student added successfully",
    data: newStudent
  });
});

app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const rawData = fs.readFileSync("./db.json", "utf-8");
  const parsedData = JSON.parse(rawData);
  const students = parsedData.students;
  const index = students.findIndex(s => s.id === id);
  if (index === -1) {
    return res.json({ message: "Student not found" });
  }
  students[index] = { ...students[index], ...req.body };
  fs.writeFileSync("./db.json", JSON.stringify(parsedData, null, 2));
  res.json({
    message: "Student updated successfully",
    data: students[index]
  });
});

app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const rawData = fs.readFileSync("./db.json", "utf-8");
  const parsedData = JSON.parse(rawData);
  const students = parsedData.students;
  const index = students.findIndex(s => s.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }
  const deleted = students.splice(index, 1);
  fs.writeFileSync("./db.json", JSON.stringify(parsedData, null, 2));
  res.json({
    message: "Student deleted successfully",
    data: deleted[0]
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
