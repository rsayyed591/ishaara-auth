import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  uuid: { type: String, required: true },
  os: { type: String, required: true },
  browser: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Visitor", visitorSchema);
