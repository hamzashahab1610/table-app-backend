const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema(
	{
		date: String,
		source: String,
		company: Number,
		title: String,
		link: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("News", NewsSchema);
