const mongoose = require("mongoose");

const PricingSchema = mongoose.Schema(
	{
		company: String,
		product: String,
		plan: String,
		cost: String,
		date: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Pricing", PricingSchema);
