const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
  const { firstName, lastName, DoB, phoneNumber, email, password, role} = req.body;

  const newUser = new userModel({
    firstName,
    lastName,
    DoB,
    phoneNumber,
    email,
    password,
    role
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
    .findOne({ email })
    .populate("role")
    .then(async (result) => {

      if (!result) {
        res.status(401);
        res.json({
          error: err,
          success: false,
          message:
            "the email dosen't exist or password you entered is incorrect",
        });
        return;
      }
      try {
        const valid = await bcrypt.compare(password, result.password);
        if (valid) {

            const payload = {
                id : result._id,
                role : result.role,
                renter : result.firstName,
            }

            const options = {
                expiresIn : "60m"
            }

            const token = jwt.sign(payload, process.env.SECRET, options)

          res.status(200).json({
            success: true,
            message: "Valid credentials",
            token : token
          });

        } else{
            res.status(401);
            res.json({
              error: err,
              success: false,
              message:
                "the email dosen't exist or password you entered is incorrect",
            }) 
        }
      } catch (error) {
        throw new Error("err");
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        message: "server error",
      });
    });
};

module.exports = { register, login };
