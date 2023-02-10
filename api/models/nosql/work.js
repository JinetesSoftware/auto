const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema(
  {
    fileName: { type: String, require: true },
    base_doc: { type: String, require: true },
    code: { type: String, require: true },
    isPay: { type: Boolean, require: true },
    status: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("works", WorkSchema);