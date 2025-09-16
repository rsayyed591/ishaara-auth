import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import visitorRoute from "./routes/visitor.js";
import adminRoutes from "./routes/admin.js";
import mailRoutes from "./routes/mail.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 🔌 Middlewares
app.use(cors());
app.use(express.json());

// 🛣️ Routes
app.use("/api/auth", authRoutes);
app.use("/api/visitor", visitorRoute); 
app.use("/api/admin", adminRoutes);
app.use("/api/mail", mailRoutes);

// 🌐 DB + Server Init
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Connected to MongoDB Atlas");
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
});
