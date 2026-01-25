const express = require("express");
const router = express.Router();
const {
  createProject,
  getProjectsForUser,
} = require("../controllers/projectController");

router.post("/create", createProject);
router.get("/user/:id", getProjectsForUser);

module.exports = router;
