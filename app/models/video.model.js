const mongoose = require("mongoose");

const VideoSchema = mongoose.Schema(
	{
		video_url: String,
		companies: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Video", VideoSchema);
