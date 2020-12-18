const mongoose = require("mongoose");

const FeatureSchema = mongoose.Schema(
	{
		company: String,
		product: String,
		plan: String,
		date: String,
		feature: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Feature", FeatureSchema);
