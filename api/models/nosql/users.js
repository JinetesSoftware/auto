const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    alias: { type: String, unique: true },
    name: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    role: { type: ["user", "admin", "manager","client"], default: "user" },
    password: { type: String, select: false },
    status: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("users", UserSchema);