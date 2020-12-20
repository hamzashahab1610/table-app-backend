const Integrations = require("../models/integration.model.js");

// Create and Save a new Integrations
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Integrations content can not be empty",
	// 	});
	// }

	// Create a Integrations
	const integration = new Integrations({
		company: req.body.company,
		product: req.body.product,
		integration: req.body.integration,
		integration_url: req.body.integration_url,
	});

	// Save Integrations in the database
	integration
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Integrations.",
			});
		});
};

// Retrieve and return all integrations from the database.
exports.findAll = (req, res) => {
	Integrations.find()
		.then((integrations) => {
			res.send(integrations);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving integrations.",
			});
		});
};

// Find a single integration with a integrationId
exports.findOne = (req, res) => {
	Integrations.findById(req.params.integrationId)
		.then((integration) => {
			if (!integration) {
				return res.status(404).send({
					message:
						"Integrations not found with id " +
						req.params.integrationId,
				});
			}
			res.send(integration);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Integrations not found with id " +
						req.params.integrationId,
				});
			}
			return res.status(500).send({
				message:
					"Error retrieving integration with id " +
					req.params.integrationId,
			});
		});
};

// Update a integration identified by the integrationId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Integrations content can not be empty",
	// 	});
	// }

	// Find integration and update it with the request body
	Integrations.findByIdAndUpdate(
		req.params.integrationId,
		{
			company: req.body.company,
			product: req.body.product,
			integration: req.body.integration,
			integration_url: req.body.integration_url,
		},
		{ new: true },
	)
		.then((integration) => {
			if (!integration) {
				return res.status(404).send({
					message:
						"Integrations not found with id " +
						req.params.integrationId,
				});
			}
			res.send(integration);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Integrations not found with id " +
						req.params.integrationId,
				});
			}
			return res.status(500).send({
				message:
					"Error updating integration with id " +
					req.params.integrationId,
			});
		});
};

// Delete a integration with the specified integrationId in the request
exports.delete = (req, res) => {
	Integrations.findByIdAndRemove(req.params.integrationId)
		.then((integration) => {
			if (!integration) {
				return res.status(404).send({
					message:
						"Integrations not found with id " +
						req.params.integrationId,
				});
			}
			res.send({ message: "Integrations deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message:
						"Integrations not found with id " +
						req.params.integrationId,
				});
			}
			return res.status(500).send({
				message:
					"Could not delete integration with id " +
					req.params.integrationId,
			});
		});
};
