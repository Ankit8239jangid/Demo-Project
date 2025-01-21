const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    // Check if authorization header exists
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).send({
        message: "Authorization token is missing.",
        success: false
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userid = decoded.userid;

    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).send({
        message: "Invalid token.",
        data: error.message,
        success: false
      });
    } else if (error.name === "TokenExpiredError") {
      return res.status(401).send({
        message: "Token has expired.",
        data: error.message,
        success: false
      });
    } else {
      return res.status(500).send({
        message: "Internal server error.",
        data: error.message,
        success: false
      });
    }
  }
};
