const mongoose = require("mongoose");

const NeuralProjectSchema = mongoose.Schema(
	{
		project_name: String,
		type: String,
		location: String,
		status: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Neural Project", NeuralProjectSchema);
