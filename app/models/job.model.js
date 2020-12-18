const mongoose = require("mongoose");

const JobSchema = mongoose.Schema(
	{
		company: String,
		date: String,
		job_title: String,
		location: String,
		job: String,
		description: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Job", JobSchema);
