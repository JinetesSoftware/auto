const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    cliente_code: { type: String, unique: true, require: true },
    identity_doc_type: { type: String, require: true },
    identity_doc: { type: String, unique: true, require: true },
    company_name: { type: String },
    comercial_name: { type: String },
    person_name: { type: String, require: true },
    person_first_lastname: { type: String, require: true },
    person_second_lastname: { type: String, require: true },
    birthdate: { type: Date },
    age: { type: Number }, // ?? calculamos con fecha
    country: { type: String },
    address: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require:true },
    phone_Number: { type: String },
    date_start: { type: Date, require:true }, // timestamp
    works: { type: mongoose.Types.ObjectId, required: false, ref: "works" },
    docs: { type: mongoose.Types.ObjectId, required: false, ref: "works" },
    taxes: { type: Number },
    discount: { type: Number },
    apply_rates: { type: Number },
    status: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("clients", ClientSchema);
