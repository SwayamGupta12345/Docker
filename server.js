const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const TaskSchema = new mongoose.Schema({ task: String });
const Task = mongoose.model("Task", TaskSchema);

app.get("/", (req, res) => res.send("Welcome to the To-Do API"));

app.post("/add", async (req, res) => {
  const newTask = new Task({ task: req.body.task });
  await newTask.save();
  res.json({ message: "Task added" });
});

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
