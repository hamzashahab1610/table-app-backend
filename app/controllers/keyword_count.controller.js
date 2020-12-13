const KeywordCount = require("../models/keyword_count.model.js");

// Create and Save a new KeywordCount
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "KeywordCount content can not be empty",
	// 	});
	// }

	// Create a KeywordCount
	const keyword_count = new KeywordCount({
		keyword: req.body.keyword,
		search_engine: req.body.search_engine,
		country: req.body.country,
		count: req.body.count,
	});

	// Save KeywordCount in the database
	keyword_count
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the KeywordCount.",
			});
		});
};

// Retrieve and return all keyword_counts from the database.
exports.findAll = (req, res) => {
	KeywordCount.find()
		.then((keyword_counts) => {
			res.send(keyword_counts);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving keyword_counts.",
			});
		});
};

// Find a single keyword_count with a keyword_countId
exports.findOne = (req, res) => {
	KeywordCount.findById(req.params.keyword_countId)
		.then((keyword_count) => {
			if (!keyword_count) {
				return res.status(404).send({
					message:
						"KeywordCount not found with id " +
						req.params.keyword_countId,
				});
			}
			res.send(keyword_count);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"KeywordCount not found with id " +
						req.params.keyword_countId,
				});
			}
			return res.status(500).send({
				message:
					"Error retrieving keyword_count with id " +
					req.params.keyword_countId,
			});
		});
};

// Update a keyword_count identified by the keyword_countId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "KeywordCount content can not be empty",
	// 	});
	// }

	// Find keyword_count and update it with the request body
	KeywordCount.findByIdAndUpdate(
		req.params.keyword_countId,
		{
			//keyword_count_name: req.body.keyword_count_name || "Untitled KeywordCount",
			keyword: req.body.keyword,
			search_engine: req.body.search_engine,
			country: req.body.country,
			count: req.body.count,
		},
		{ new: true },
	)
		.then((keyword_count) => {
			if (!keyword_count) {
				return res.status(404).send({
					message:
						"KeywordCount not found with id " +
						req.params.keyword_countId,
				});
			}
			res.send(keyword_count);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"KeywordCount not found with id " +
						req.params.keyword_countId,
				});
			}
			return res.status(500).send({
				message:
					"Error updating keyword_count with id " +
					req.params.keyword_countId,
			});
		});
};

// Delete a keyword_count with the specified keyword_countId in the request
exports.delete = (req, res) => {
	KeywordCount.findByIdAndRemove(req.params.keyword_countId)
		.then((keyword_count) => {
			if (!keyword_count) {
				return res.status(404).send({
					message:
						"KeywordCount not found with id " +
						req.params.keyword_countId,
				});
			}
			res.send({ message: "KeywordCount deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message:
						"KeywordCount not found with id " +
						req.params.keyword_countId,
				});
			}
			return res.status(500).send({
				message:
					"Could not delete keyword_count with id " +
					req.params.keyword_countId,
			});
		});
};
