const express = require("express");
const router = express.Router();
const {
  getProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const { protect } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/roleMiddleware");

router.get("/", protect, getProjects);
router.post("/", protect, isAdmin, createProject);
router.get("/:id", protect, getProjectById);
router.put("/:id", protect, isAdmin, updateProject);
router.delete("/:id", protect, isAdmin, deleteProject);

module.exports = router;
