const mongoose = require("mongoose");

const MarketSchema = mongoose.Schema(
	{
		market_name: String,
		companies: String,
		keywords: String,
		market_size: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Market", MarketSchema);
