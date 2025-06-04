import express from "express";
import Mail from "../models/Mail.js";

const router = express.Router();

// 💌 POST route to collect emails
router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const existing = await Mail.findOne({ email });
    if (existing) return res.status(409).json({ message: "Email already exists" });

    const savedMail = await Mail.create({ email });
    res.status(201).json({ message: "Email saved", mail: savedMail });
  } catch (err) {
    res.status(500).json({ message: "Error saving email", error: err.message });
  }
});

// 📬 GET route to fetch all collected emails
router.get("/", async (req, res) => {
  try {
    const mails = await Mail.find().sort({ subscribedAt: -1 }); // latest first
    res.status(200).json(mails);
  } catch (err) {
    res.status(500).json({ message: "Error fetching emails", error: err.message });
  }
});

export default router;
