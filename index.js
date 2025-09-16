import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import visitorRoute from "./routes/visitor.js";
import adminRoutes from "./routes/admin.js";
import mailRoutes from "./routes/mail.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allowed origins list
const allowedOrigins = [
  "http://localhost:3000",
  "https://ishaara.vercel.app"
];

// ✅ CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Allow requests like Postman
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// ✅ Middleware to parse JSON requests
app.use(express.json());

// ✅ Preflight handler – ensures OPTIONS requests are properly responded to
app.options("*", cors());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/visitor", visitorRoute);
app.use("/api/admin", adminRoutes);
app.use("/api/mail", mailRoutes);

// ✅ Connect to MongoDB and start server
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
