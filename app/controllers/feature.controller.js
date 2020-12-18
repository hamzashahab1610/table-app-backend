const Feature = require("../models/feature.model.js");

// Create and Save a new Feature
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Feature content can not be empty",
	// 	});
	// }

	// Create a Feature
	const feature = new Feature({
		company: req.body.company,
		product: req.body.product,
		plan: req.body.plan,
		date: req.body.date,
		feature: req.body.feature,
	});

	// Save Feature in the database
	feature
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Feature.",
			});
		});
};

// Retrieve and return all features from the database.
exports.findAll = (req, res) => {
	Feature.find()
		.then((features) => {
			res.send(features);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving features.",
			});
		});
};

// Find a single feature with a featureId
exports.findOne = (req, res) => {
	Feature.findById(req.params.featureId)
		.then((feature) => {
			if (!feature) {
				return res.status(404).send({
					message:
						"Feature not found with id " + req.params.featureId,
				});
			}
			res.send(feature);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Feature not found with id " + req.params.featureId,
				});
			}
			return res.status(500).send({
				message:
					"Error retrieving feature with id " + req.params.featureId,
			});
		});
};

// Update a feature identified by the featureId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Feature content can not be empty",
	// 	});
	// }

	// Find feature and update it with the request body
	Feature.findByIdAndUpdate(
		req.params.featureId,
		{
			company: req.body.company,
			product: req.body.product,
			plan: req.body.plan,
			date: req.body.date,
			feature: req.body.feature,
		},
		{ new: true },
	)
		.then((feature) => {
			if (!feature) {
				return res.status(404).send({
					message:
						"Feature not found with id " + req.params.featureId,
				});
			}
			res.send(feature);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Feature not found with id " + req.params.featureId,
				});
			}
			return res.status(500).send({
				message:
					"Error updating feature with id " + req.params.featureId,
			});
		});
};

// Delete a feature with the specified featureId in the request
exports.delete = (req, res) => {
	Feature.findByIdAndRemove(req.params.featureId)
		.then((feature) => {
			if (!feature) {
				return res.status(404).send({
					message:
						"Feature not found with id " + req.params.featureId,
				});
			}
			res.send({ message: "Feature deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message:
						"Feature not found with id " + req.params.featureId,
				});
			}
			return res.status(500).send({
				message:
					"Could not delete feature with id " + req.params.featureId,
			});
		});
};
