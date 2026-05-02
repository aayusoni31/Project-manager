// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const generateToken = (id, role) => {
//   return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "30d" });
// };

// const register = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res
//         .status(400)
//         .json({ message: "User already exists with this email" });
//     }

//     const user = await User.create({
//       name,
//       email,
//       password,
//       role: role || "Member",
//     });

//     // FIXED RESPONSE FORMAT
//     res.status(201).json({
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//       token: generateToken(user._id, user.role),
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res
//         .status(400)
//         .json({ message: "Email and password are required" });
//     }

//     const user = await User.findOne({ email }).select("+password");
//     if (!user || !(await user.matchPassword(password))) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     // FIXED RESPONSE FORMAT
//     res.json({
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//       token: generateToken(user._id, user.role),
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getMe = async (req, res) => {
//   res.json(req.user);
// };

// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find({}).select("-password");
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { register, login, getMe, getAllUsers };
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // 1. Ensure Name is provided
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "All fields, including name, are required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    // 2. Create the user in MongoDB
    const user = await User.create({
      name,
      email,
      password,
      role: role || "Member",
    });

    // 3. Send the REAL name back to the frontend
    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: generateToken(user._id, user.role),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Send the REAL name back to the frontend
    res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: generateToken(user._id, user.role),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ... keep your getMe and getAllUsers functions here ...
const getMe = async (req, res) => {
  res.json(req.user);
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { register, login, getMe, getAllUsers };
