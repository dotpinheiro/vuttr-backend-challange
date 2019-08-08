const Tool = require("../models/Tool");

class ToolController {
  async index(req, res) {
    const { tag } = req.query;
    let params = {};
    if (tag) {
      params = {
        tags: { $regex: tag, $options: "i" }
      };
    }
    const tools = await Tool.find(params).select("-__v -createdAt");
    return res.json(tools);
  }
  async store(req, res) {
    const tool = await Tool.create(req.body);
    return res.json(tool);
  }
  async update(req, res) {}

  async destroy(req, res) {}
}
module.exports = new ToolController();
