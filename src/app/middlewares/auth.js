const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res
      .status(401)
      .send({ error: "An authorization token must be provided." });
  }
  const [, token] = authHeader.split(" ");

  try {
    const decodedToken = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decodedToken.id;
    return next();
  } catch (ex) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
