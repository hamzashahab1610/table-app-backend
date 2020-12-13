const mongoose = require("mongoose");

const AppsSchema = mongoose.Schema(
	{
		market: String,
		app_name: String,
		description: String,
		planned_release: String,
		model: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Apps", AppsSchema);
