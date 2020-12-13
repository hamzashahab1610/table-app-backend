const mongoose = require("mongoose");

const ShellSchema = mongoose.Schema(
	{
		shell_name: String,
		description: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Shell", ShellSchema);
