const Project = require("../models/project");

const createProject = async (req, res) => {
  const { title, tags, userId } = req.body;
  try {
    project = new Project({
      title: title,
      tags: tags,
      owner: userId,
    });
    await project.save();
    res.status(201).json({ message: "Project created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getProjectsForUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const projects = await Project.find({
      $or: [{ owner: userId }, { collaborators: userId }],
    })
      .populate("owner", "username")
      .populate("collaborators", "username")
      .sort({ createdAt: -1 });

    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProject = async (req, res) => {
  const projectId = req.params.id;
  const { title, content, tags, collaborators } = req.body;
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    project.title = title;
    project.content = content;
    project.tags = tags;
    project.collaborators = collaborators;
    await project.save();
    res.json({ message: "Project updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createProject, getProjectsForUser, updateProject };