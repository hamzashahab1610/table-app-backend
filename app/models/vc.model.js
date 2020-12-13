const mongoose = require("mongoose");

const VCSchema = mongoose.Schema(
	{
		vc_name: String,
		location: String,
		markets: String,
		companies_funded: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("VC", VCSchema);
