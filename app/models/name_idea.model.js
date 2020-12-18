const mongoose = require("mongoose");

const NameIdeaSchema = mongoose.Schema(
	{
		name: String,
		url: String,
		available: String,
		app: String,
		cost: String,
		info: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("NameIdea", NameIdeaSchema);
