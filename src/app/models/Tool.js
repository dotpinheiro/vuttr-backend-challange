const mongoose = require("mongoose");

const ToolSchema = new mongoose.Schema({
  id: {
    type: Number
    // required: true
  },
  title: {
    type: String,
    required: true
  },
  link: {
    default: "",
    type: String
  },
  description: {
    default: "",
    type: String
  },
  tags: {
    default: [],
    type: [String]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Tool", ToolSchema);
