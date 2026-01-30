const express = require("express");
const router = express.Router();
const {
  createProject,
  getProjectsForUser,
  updateProject,
} = require("../controllers/projectController");

router.post("/create", createProject);
router.put("/update/:id", updateProject);
router.get("/user/:id", getProjectsForUser);

module.exports = router;
