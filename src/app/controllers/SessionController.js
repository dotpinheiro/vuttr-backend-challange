const User = require("../models/User");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password." });
    }
    if (!(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid email or password." });
    }
    let token = await User.createToken(user);
    return res.json({ user, token });
  }
}

module.exports = new SessionController();
