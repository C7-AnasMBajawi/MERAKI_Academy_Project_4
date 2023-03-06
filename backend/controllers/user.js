const userModel = require("../models/user");
const bcrypt = require("bcrypt");

const register = (req, res) => {
  const { firstName, lastName, DoB, phoneNumber, email, password } = req.body;

  const newUser = new userModel({
    firstName,
    lastName,
    DoB,
    phoneNumber,
    email,
    password,
  });

  newUser
    .save()
    .then((user) => {
      res.status(201).json({
        success: true,
        message: "user created successfully",
        user: user,
      });
    })
    .catch((err) => {
      res.json({
        error: err,
        message: "server error",
      });
    });
};

const login = (req, res) => {
  const { email, password } = req.body;

  userModel
    .find({ email })
    .then((result) => {
      if (result) {
        const vaild = bcrypt.compare(this.password, result.password)
        
        res.satatus(200);
        res.json({
          success: true,
          message: "Valid credentials",
        });
      } else {
        res.status(404).json({
          success: false,
          message: " the email dosen't exist or the password is incorrect",
        });
      }
    })
    .catch((err) => {
      res.status(401);
      res.json({
        error: err,
        success: false,
        message: "Invalid credentials",
      });
    });
};

module.exports = { register, login };
