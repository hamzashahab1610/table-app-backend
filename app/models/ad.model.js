const mongoose = require("mongoose");

const AdSchema = mongoose.Schema(
	{
		site: String,
		ad_type: String,
		ad_costs: String,
		contact_info: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Ad", AdSchema);
