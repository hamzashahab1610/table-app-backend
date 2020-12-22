const mongoose = require("mongoose");

const FileSchema = mongoose.Schema(
	{
		file: String,
		file_url: String,
		description: String,
		file_type: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("File", FileSchema);
