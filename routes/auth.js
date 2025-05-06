import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// ✅ REGISTER route
router.post("/register", async (req, res) => {
  const { email, username, password } = req.body;

  try {
    // Check if user exists
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json("Email already registered");

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Create and save new user
    const newUser = new User({ email, username, password: hashed });
    await newUser.save();

    // 🔐 Generate JWT
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        username: newUser.username,
      }
    });
  } catch (err) {
    res.status(500).json("Registration error: " + err.message);
  }
});

// ✅ LOGIN route
router.post("/login", async (req, res) => {
    const { email, username, password } = req.body;
    
    // Ensure either email or username is provided
    if (!email && !username) {
      return res.status(400).json("Please provide either email or username");
    }
  
    try {
      // Check if user exists by either email or username
      const user = await User.findOne({ $or: [{ email }, { username }] });
      
      if (!user) return res.status(400).json("Invalid email/username or password");
  
      // Compare password with hashed password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) return res.status(400).json("Invalid email/username or password");
  
      // 🔐 Generate JWT
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
  
      // Send response with JWT
      res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          email: user.email,
          username: user.username,
        }
      });
    } catch (err) {
      res.status(500).json("Login error: " + err.message);
    }
  });
  
export default router;
