const mongoose = require("mongoose");

const ReviewSiteSchema = mongoose.Schema(
	{
		name: String,
		url: String,
		comments: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Review Site", ReviewSiteSchema);
