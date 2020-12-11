const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema(
	{
		company_name: String,
		keywords: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Market", CompanySchema);
