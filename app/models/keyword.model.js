const mongoose = require("mongoose");

const KeywordSchema = mongoose.Schema(
	{
		keyword: String,
		companies: String,
		markets: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Keyword", KeywordSchema);
