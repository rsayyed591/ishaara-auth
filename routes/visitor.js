import express from "express";
import Visitor from "../models/Visitor.js";

const router = express.Router();

// POST: Save visitor data
router.post("/", async (req, res) => {
  try {
    const { uuid, os, browser } = req.body;

    if (!uuid || !os || !browser) {
      return res.status(400).json("All fields are required");
    }

    const newVisitor = new Visitor({ uuid, os, browser });
    await newVisitor.save();

    res.status(201).json({
      message: "Visitor logged successfully ✨",
      visitor: newVisitor,
    });
  } catch (err) {
    res.status(500).json("Server error: " + err.message);
  }
});

// 💖 GET: Fetch all visitors
router.get("/", async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(visitors);
  } catch (err) {
    res.status(500).json("Failed to fetch visitors: " + err.message);
  }
});

export default router;
