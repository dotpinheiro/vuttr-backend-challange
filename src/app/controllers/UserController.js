const User = require("../models/User");

class UserController {
  async index(req, res) {}

  async show(req, res) {}

  async store(req, res) {
    const { email } = req.body;
    if (await User.findOne({ email })) {
      return res.status(400).json({ error: "This user already exists!" });
    }
    const user = await User.create(req.body);
    return res.json(user);
  }

  async update(req, res) {}
}

module.exports = new UserController();
