const Term = require("../models/term.model.js");

// Create and Save a new Term
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Term content can not be empty",
	// 	});
	// }

	// Create a Term
	const term = new Term({
		company: req.body.company,
		product: req.body.product,
		term: req.body.term,
		explanation: req.body.explanation,
	});

	// Save Term in the database
	term.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Term.",
			});
		});
};

// Retrieve and return all terms from the database.
exports.findAll = (req, res) => {
	Term.find()
		.then((terms) => {
			res.send(terms);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving terms.",
			});
		});
};

// Find a single term with a termId
exports.findOne = (req, res) => {
	Term.findById(req.params.termId)
		.then((term) => {
			if (!term) {
				return res.status(404).send({
					message: "Term not found with id " + req.params.termId,
				});
			}
			res.send(term);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Term not found with id " + req.params.termId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving term with id " + req.params.termId,
			});
		});
};

// Update a term identified by the termId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Term content can not be empty",
	// 	});
	// }

	// Find term and update it with the request body
	Term.findByIdAndUpdate(
		req.params.termId,
		{
			company: req.body.company,
			product: req.body.product,
			term: req.body.term,
			explanation: req.body.explanation,
		},
		{ new: true },
	)
		.then((term) => {
			if (!term) {
				return res.status(404).send({
					message: "Term not found with id " + req.params.termId,
				});
			}
			res.send(term);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Term not found with id " + req.params.termId,
				});
			}
			return res.status(500).send({
				message: "Error updating term with id " + req.params.termId,
			});
		});
};

// Delete a term with the specified termId in the request
exports.delete = (req, res) => {
	Term.findByIdAndRemove(req.params.termId)
		.then((term) => {
			if (!term) {
				return res.status(404).send({
					message: "Term not found with id " + req.params.termId,
				});
			}
			res.send({ message: "Term deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "Term not found with id " + req.params.termId,
				});
			}
			return res.status(500).send({
				message: "Could not delete term with id " + req.params.termId,
			});
		});
};
