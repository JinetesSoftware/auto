const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    tenant:  { type: String, require: true },
    avatar: { type: String },
    alias: { type: String, unique: true },
    name: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    country:  { type: String },
    address:  { type: String },
    zipCode:  { type: String },
    role: { type: ["user", "admin", "manager"], default: "user" },
    password: { type: String, select: false },
    status: { type: String, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("users", UserSchema);