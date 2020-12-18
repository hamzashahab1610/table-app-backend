const mongoose = require("mongoose");

const ToolSchema = mongoose.Schema(
	{
		tool_name: String,
		url: String,
		cost: String,
		description: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Tool", ToolSchema);
