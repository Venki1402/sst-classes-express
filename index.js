const express = require("express");
const app = express();
app.use(express.json());

let courses = [
  { id: 1, name: "java" },
  { id: 2, name: "javascript" },
  { id: 3, name: "python" },
];

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.post("/courses", (req, res) => {
  const newCourse = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(newCourse);
  res.json(courses);
});

app.delete("/courses/:id", (req, res) => {
    const courseId = parseInt(req.params.id);
    const courseIndex = courses.findIndex(course => course.id === courseId);
    if (courseIndex === -1) {
        return res.status(404).json({ error: "Course not found" });
    }
    courses.splice(courseIndex, 1);
    res.json(courses);
});

app.listen(3000, () => {
  console.log("server started");
});
