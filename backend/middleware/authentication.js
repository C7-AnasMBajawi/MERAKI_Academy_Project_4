const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ").pop();
    jwt.verify(token, process.env.SECRET, (err, result) => {
      if (err) {
        res.status(403).json({
          success: false,
          message: "The token is invalid or expired",
        });
      } else {
        req.token = result;
        next();
      }
    });
  } else {
    res.status(403).json({
      success: false,
      message: "Forbidden",
    });
  }
};

module.exports = authentication;
