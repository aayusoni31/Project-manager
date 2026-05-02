// module.exports = router;
const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getMe,
  getAllUsers,
} = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/roleMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
router.get("/users", protect, isAdmin, getAllUsers);

module.exports = router;
