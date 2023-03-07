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
    .findOne({email})
    .then(async (result) => {
        console.log(result.password);
      if (result) {
        try {
          const valid = await bcrypt.compare(password, result.password);
          console.log(valid);
          if (valid) {
            res.satatus(200);
            res.json({
              success: true,
              message: "Valid credentials",
            });
          } else {
            res.status(401);
            res.json({
              error: err,
              success: false,
              message: "the email dosen't exist or password you entered is incorrect",
            });
          }
        } catch (error) {
          throw error;
        }
      }else{
        res.status(401);
        res.json({
          error: err,
          success: false,
          message: "Invalid credentials",
        });
      }
    })
    .catch((err) => {
      res.status(500);
      res.json({
        error: err,
        message: "server error",
      });
    });
};

module.exports = { register, login };
