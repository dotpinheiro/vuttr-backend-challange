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
    return res.status(201).json(tool);
  }
  async update(req, res) {
    const { id } = req.params;
    let tool = await Tool.findOneAndUpdate(id, req.body);
    if (!tool) {
      return res.status(400).json({ error: "This tool doest not exists" });
    }
    return res.status(200).json(tool);
  }

  async destroy(req, res) {
    const { id } = req.params;
    let tool = await Tool.findByIdAndDelete(id);
    if (!tool) {
      return res.status(400).json({ error: "This tool does not exists" });
    }
    return res.status(204).send();
  }
}
module.exports = new ToolController();
