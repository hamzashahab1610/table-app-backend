const mongoose = require("mongoose");

const ModelSchema = mongoose.Schema(
	{
		model_name: String,
		category: String,
		description: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Model", ModelSchema);
