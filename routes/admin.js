import express from "express";
import bcrypt from "bcrypt";
import AdminPassword from "../models/AdminPassword.js";

const router = express.Router();

// 💡 POST /api/admin
router.post("/login", async (req, res) => {
  const { password } = req.body;

  if (!password) return res.status(400).json({ message: "Password required" });

  try {
    const admin = await AdminPassword.findOne();
    if (!admin) return res.status(404).json({ message: "Admin password not set" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    res.status(200).json({ message: "Access granted" }); // ✅ no token, just frontend flag
  } catch (err) {
    res.status(500).json({ message: "Login error", error: err.message });
  }
});

export default router;
