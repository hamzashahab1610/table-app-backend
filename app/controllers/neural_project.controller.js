const NeuralProject = require("../models/neural_project.model.js");

// Create and Save a new NeuralProject
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "NeuralProject content can not be empty",
	// 	});
	// }

	// Create a NeuralProject
	const neural_project = new NeuralProject({
		project_name: req.body.project_name,
		type: req.body.type,
		location: req.body.location,
		status: req.body.status,
	});

	// Save NeuralProject in the database
	neural_project
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the NeuralProject.",
			});
		});
};

// Retrieve and return all neural_projects from the database.
exports.findAll = (req, res) => {
	NeuralProject.find()
		.then((neural_projects) => {
			res.send(neural_projects);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving neural_projects.",
			});
		});
};

// Find a single neural_project with a neural_projectId
exports.findOne = (req, res) => {
	NeuralProject.findById(req.params.neural_projectId)
		.then((neural_project) => {
			if (!neural_project) {
				return res.status(404).send({
					message:
						"NeuralProject not found with id " +
						req.params.neural_projectId,
				});
			}
			res.send(neural_project);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"NeuralProject not found with id " +
						req.params.neural_projectId,
				});
			}
			return res.status(500).send({
				message:
					"Error retrieving neural_project with id " +
					req.params.neural_projectId,
			});
		});
};

// Update a neural_project identified by the neural_projectId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "NeuralProject content can not be empty",
	// 	});
	// }

	// Find neural_project and update it with the request body
	NeuralProject.findByIdAndUpdate(
		req.params.neural_projectId,
		{
			project_name: req.body.project_name,
			type: req.body.type,
			location: req.body.location,
			status: req.body.status,
		},
		{ new: true },
	)
		.then((neural_project) => {
			if (!neural_project) {
				return res.status(404).send({
					message:
						"NeuralProject not found with id " +
						req.params.neural_projectId,
				});
			}
			res.send(neural_project);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"NeuralProject not found with id " +
						req.params.neural_projectId,
				});
			}
			return res.status(500).send({
				message:
					"Error updating neural_project with id " +
					req.params.neural_projectId,
			});
		});
};

// Delete a neural_project with the specified neural_projectId in the request
exports.delete = (req, res) => {
	NeuralProject.findByIdAndRemove(req.params.neural_projectId)
		.then((neural_project) => {
			if (!neural_project) {
				return res.status(404).send({
					message:
						"NeuralProject not found with id " +
						req.params.neural_projectId,
				});
			}
			res.send({ message: "NeuralProject deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message:
						"NeuralProject not found with id " +
						req.params.neural_projectId,
				});
			}
			return res.status(500).send({
				message:
					"Could not delete neural_project with id " +
					req.params.neural_projectId,
			});
		});
};
