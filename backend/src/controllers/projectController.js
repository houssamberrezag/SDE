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

module.exports = { createProject, getProjectsForUser };
