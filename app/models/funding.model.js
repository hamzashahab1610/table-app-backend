const mongoose = require("mongoose");

const FundingSchema = mongoose.Schema(
	{
		vc_name: String,
		company: String,
		market: String,
		date: String,
		amount: Number,
		round: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Funding", FundingSchema);
