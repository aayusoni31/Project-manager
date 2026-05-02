const Project = require("../models/Project");
const Task = require("../models/Task");

const getProjects = async (req, res) => {
  try {
    let projects;
    if (req.user.role === "Admin") {
      projects = await Project.find({})
        .populate("createdBy", "name email")
        .populate("members", "name email role");
    } else {
      projects = await Project.find({ members: req.user._id })
        .populate("createdBy", "name email")
        .populate("members", "name email role");
    }
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  try {
    const { title, description, members } = req.body;
    if (!title)
      return res.status(400).json({ message: "Project title is required" });

    const project = await Project.create({
      title,
      description,
      createdBy: req.user._id,
      members: members || [],
    });

    await project.populate("createdBy", "name email");
    await project.populate("members", "name email role");
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate("createdBy", "name email")
      .populate("members", "name email role");

    if (!project) return res.status(404).json({ message: "Project not found" });

    const isMember = project.members.some(
      (m) => m._id.toString() === req.user._id.toString(),
    );
    if (req.user.role !== "Admin" && !isMember) {
      return res.status(403).json({ message: "Access denied" });
    }

    const tasks = await Task.find({ project: project._id })
      .populate("assignedTo", "name email")
      .populate("createdBy", "name email");

    res.json({ project, tasks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const { title, description, members } = req.body;
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    project.title = title || project.title;
    project.description =
      description !== undefined ? description : project.description;
    project.members = members || project.members;
    await project.save();

    await project.populate("createdBy", "name email");
    await project.populate("members", "name email role");
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    await Task.deleteMany({ project: req.params.id });
    await project.deleteOne();
    res.json({ message: "Project and all its tasks deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
};
