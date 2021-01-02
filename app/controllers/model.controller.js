const Model = require("../models/model.model.js");

// Create and Save a new Model
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Model content can not be empty",
	// 	});
	// }

	// Create a Model
	const model = new Model({
		model_name: req.body.model_name,
		category: req.body.category,
		description: req.body.description,
	});

	// Save Model in the database
	model
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Model.",
			});
		});
};

// Retrieve and return all models from the database.
exports.findAll = (req, res) => {
	Model.find()
		.then((models) => {
			res.send(models);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving models.",
			});
		});
};

// Find a single model with a modelId
exports.findOne = (req, res) => {
	Model.findById(req.params.modelId)
		.then((model) => {
			if (!model) {
				return res.status(404).send({
					message: "Model not found with id " + req.params.modelId,
				});
			}
			res.send(model);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Model not found with id " + req.params.modelId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving model with id " + req.params.modelId,
			});
		});
};

// Update a model identified by the modelId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Model content can not be empty",
	// 	});
	// }

	// Find model and update it with the request body
	Model.findByIdAndUpdate(
		req.params.modelId,
		{
			//model_name: req.body.model_name || "Untitled Model",
			model_name: req.body.model_name,
			category: req.body.category,
			description: req.body.description,
		},
		{ new: true },
	)
		.then((model) => {
			if (!model) {
				return res.status(404).send({
					message: "Model not found with id " + req.params.modelId,
				});
			}
			res.send(model);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Model not found with id " + req.params.modelId,
				});
			}
			return res.status(500).send({
				message: "Error updating model with id " + req.params.modelId,
			});
		});
};

// Delete a model with the specified modelId in the request
exports.delete = (req, res) => {
	Model.findByIdAndRemove(req.params.modelId)
		.then((model) => {
			if (!model) {
				return res.status(404).send({
					message: "Model not found with id " + req.params.modelId,
				});
			}
			res.send({ message: "Model deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "Model not found with id " + req.params.modelId,
				});
			}
			return res.status(500).send({
				message: "Could not delete model with id " + req.params.modelId,
			});
		});
};
