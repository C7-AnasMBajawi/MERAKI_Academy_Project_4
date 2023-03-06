const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 3, maxlength: 12 },
  lastName: { type: String, required: true, minlength: 3, maxlength: 12 },
  DoB: { type: Date, required: true },
  phoneNumber: { type: Number, required: true ,minlength: 10, maxlength: 10 },
  email: { type: String, required: true, match:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, unique : true},
  password: { type: String, required: true, minlength: 8, maxlength: 16 },
//   role : {type: mongoose.Schema.Types.ObjectId , ref: "role"}
});

userSchema.pre("save", async function(){
    this.email = this.email.toLowerCase()
    this.password = await bcrypt.hash(this.password , 5)
})

module.exports = mongoose.model("user", userSchema);
