const mongoose = require("mongoose");

const IntegrationSchema = mongoose.Schema(
	{
		company: String,
		product: String,
		integration: Number,
		integration_url: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Integration", IntegrationSchema);
