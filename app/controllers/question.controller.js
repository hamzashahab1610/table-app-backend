const Question = require("../models/question.model.js");

// Create and Save a new Question
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Question content can not be empty",
	// 	});
	// }

	// Create a Question
	const question = new Question({
		company: req.body.company,
		product: req.body.product,
		question: req.body.question,
		answer: req.body.answer,
	});

	// Save Question in the database
	question
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Question.",
			});
		});
};

// Retrieve and return all questions from the database.
exports.findAll = (req, res) => {
	Question.find()
		.then((questions) => {
			res.send(questions);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving questions.",
			});
		});
};

// Find a single question with a questionId
exports.findOne = (req, res) => {
	Question.findById(req.params.questionId)
		.then((question) => {
			if (!question) {
				return res.status(404).send({
					message:
						"Question not found with id " + req.params.questionId,
				});
			}
			res.send(question);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Question not found with id " + req.params.questionId,
				});
			}
			return res.status(500).send({
				message:
					"Error retrieving question with id " +
					req.params.questionId,
			});
		});
};

// Update a question identified by the questionId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Question content can not be empty",
	// 	});
	// }

	// Find question and update it with the request body
	Question.findByIdAndUpdate(
		req.params.questionId,
		{
			company: req.body.company,
			product: req.body.product,
			question: req.body.question,
			answer: req.body.answer,
		},
		{ new: true },
	)
		.then((question) => {
			if (!question) {
				return res.status(404).send({
					message:
						"Question not found with id " + req.params.questionId,
				});
			}
			res.send(question);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Question not found with id " + req.params.questionId,
				});
			}
			return res.status(500).send({
				message:
					"Error updating question with id " + req.params.questionId,
			});
		});
};

// Delete a question with the specified questionId in the request
exports.delete = (req, res) => {
	Question.findByIdAndRemove(req.params.questionId)
		.then((question) => {
			if (!question) {
				return res.status(404).send({
					message:
						"Question not found with id " + req.params.questionId,
				});
			}
			res.send({ message: "Question deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message:
						"Question not found with id " + req.params.questionId,
				});
			}
			return res.status(500).send({
				message:
					"Could not delete question with id " +
					req.params.questionId,
			});
		});
};
