import mongoose from "mongoose";

const AdminPasswordSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("AdminPassword", AdminPasswordSchema);
