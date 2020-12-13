const Apps = require("../models/app.model.js");

// Create and Save a new Apps
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Apps content can not be empty",
	// 	});
	// }

	// Create a Apps
	const app = new Apps({
		market: req.body.market,
		app_name: req.body.app_name,
		description: req.body.description,
		planned_release: req.body.planned_release,
		model: req.body.model,
	});

	// Save Apps in the database
	app.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Apps.",
			});
		});
};

// Retrieve and return all apps from the database.
exports.findAll = (req, res) => {
	Apps.find()
		.then((apps) => {
			res.send(apps);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving apps.",
			});
		});
};

// Find a single app with a appId
exports.findOne = (req, res) => {
	Apps.findById(req.params.appId)
		.then((app) => {
			if (!app) {
				return res.status(404).send({
					message: "Apps not found with id " + req.params.appId,
				});
			}
			res.send(app);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Apps not found with id " + req.params.appId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving app with id " + req.params.appId,
			});
		});
};

// Update a app identified by the appId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Apps content can not be empty",
	// 	});
	// }

	// Find app and update it with the request body
	Apps.findByIdAndUpdate(
		req.params.appId,
		{
			market: req.body.market,
			app_name: req.body.app_name,
			description: req.body.description,
			planned_release: req.body.planned_release,
			model: req.body.model,
		},
		{ new: true },
	)
		.then((app) => {
			if (!app) {
				return res.status(404).send({
					message: "Apps not found with id " + req.params.appId,
				});
			}
			res.send(app);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Apps not found with id " + req.params.appId,
				});
			}
			return res.status(500).send({
				message: "Error updating app with id " + req.params.appId,
			});
		});
};

// Delete a app with the specified appId in the request
exports.delete = (req, res) => {
	Apps.findByIdAndRemove(req.params.appId)
		.then((app) => {
			if (!app) {
				return res.status(404).send({
					message: "Apps not found with id " + req.params.appId,
				});
			}
			res.send({ message: "Apps deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "Apps not found with id " + req.params.appId,
				});
			}
			return res.status(500).send({
				message: "Could not delete app with id " + req.params.appId,
			});
		});
};
