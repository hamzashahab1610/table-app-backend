const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema(
	{
		company: String,
		product: String,
		question: String,
		answer: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Question", QuestionSchema);
