// set-admin-password.js
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import AdminPassword from "../models/AdminPassword.js";

// Load your environment variables (like MONGO_URI)
dotenv.config();

const setAdminPassword = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const hashed = await bcrypt.hash("mypass", 10); //replace "mypass" with your desired password
    await AdminPassword.create({ password: hashed });
    console.log("✅ Admin password set successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error setting password:", error.message);
    process.exit(1);
  }
};

setAdminPassword();
