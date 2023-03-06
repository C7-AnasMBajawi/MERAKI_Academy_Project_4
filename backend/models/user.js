const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 3, maxlength: 12 },
  lastName: { type: String, required: true, minlength: 3, maxlength: 12 },
  DoB: { type: Date, required: true },
  phoneNumber: { type: Number, required: true, min: 10, max: 10 },
  email: { type: String, required: true, match:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/},
  password: { type: String, required: true, minlength: 8, maxlength: 16 },
});

module.exports = mongoose.model("user", userSchema);
