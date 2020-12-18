const mongoose = require("mongoose");

const TermSchema = mongoose.Schema(
	{
		company: String,
		product: String,
		term: String,
		explanation: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Term", TermSchema);
