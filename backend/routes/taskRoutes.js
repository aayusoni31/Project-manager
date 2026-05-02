const express = require("express");
const router = express.Router();
const {
  getMyTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const { protect } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/roleMiddleware");

router.get("/", protect, getMyTasks);
router.post("/", protect, isAdmin, createTask);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, isAdmin, deleteTask);

module.exports = router;
