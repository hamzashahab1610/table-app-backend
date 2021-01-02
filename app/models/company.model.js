const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema(
	{
		company_name: String,
		keywords: String,
		total_funding: String,
		last_funding_date: String,
		last_funding_amount: String,
		top_player: Boolean,
		tagline_text_block: String,
		revenue: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Company", CompanySchema);
