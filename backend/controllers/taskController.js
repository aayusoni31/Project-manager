const Task = require("../models/Task");
const Project = require("../models/Project");

const getMyTasks = async (req, res) => {
  try {
    let tasks;
    if (req.user.role === "Admin") {
      tasks = await Task.find({})
        .populate("assignedTo", "name email")
        .populate("project", "title")
        .populate("createdBy", "name email");
    } else {
      tasks = await Task.find({ assignedTo: req.user._id })
        .populate("assignedTo", "name email")
        .populate("project", "title")
        .populate("createdBy", "name email");
    }
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      status,
      priority,
      dueDate,
      projectId,
      assignedTo,
    } = req.body;

    if (!title || !projectId) {
      return res
        .status(400)
        .json({ message: "Title and project are required" });
    }

    const project = await Project.findById(projectId);
    if (!project) return res.status(404).json({ message: "Project not found" });

    const task = await Task.create({
      title,
      description,
      status,
      priority,
      dueDate,
      project: projectId,
      assignedTo,
      createdBy: req.user._id,
    });

    await task.populate("assignedTo", "name email");
    await task.populate("project", "title");
    await task.populate("createdBy", "name email");
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    if (req.user.role === "Member") {
      if (task.assignedTo?.toString() !== req.user._id.toString()) {
        return res
          .status(403)
          .json({ message: "You can only update your own tasks" });
      }
      task.status = req.body.status || task.status;
    } else {
      task.title = req.body.title || task.title;
      task.description =
        req.body.description !== undefined
          ? req.body.description
          : task.description;
      task.status = req.body.status || task.status;
      task.priority = req.body.priority || task.priority;
      task.dueDate = req.body.dueDate || task.dueDate;
      task.assignedTo = req.body.assignedTo || task.assignedTo;
    }

    await task.save();
    await task.populate("assignedTo", "name email");
    await task.populate("project", "title");
    await task.populate("createdBy", "name email");
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    await task.deleteOne();
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getMyTasks, createTask, updateTask, deleteTask };
