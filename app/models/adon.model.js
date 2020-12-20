const mongoose = require("mongoose");

const AdonSchema = mongoose.Schema(
	{
		company: String,
		product: String,
		adon_name: String,
		adon_company: String,
		adon_url: String,
		cost: String,
		notes: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Adon", AdonSchema);
