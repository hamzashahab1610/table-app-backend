const mongoose = require("mongoose");

const LeadSchema = mongoose.Schema(
	{
		lead_name: String,
		title: String,
		organization: String,
		org_type: String,
		email: String,
		phone: String,
		url: String,
		last_contact: String,
		notes: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Lead", LeadSchema);
