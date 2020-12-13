const mongoose = require("mongoose");

const KeywordCountSchema = mongoose.Schema(
	{
		keyword: String,
		search_engine: String,
		country: String,
		count: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Keyword Count", KeywordCountSchema);
