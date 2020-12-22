const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema(
	{
		image: String,
		image_url: String,
		description: String,
		image_type: String,
		option: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Image", ImageSchema);
