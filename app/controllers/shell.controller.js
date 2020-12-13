const Shell = require("../models/shell.model.js");

// Create and Save a new Shell
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Shell content can not be empty",
	// 	});
	// }

	// Create a Shell
	const shell = new Shell({
		shell_name: req.body.shell_name,
		description: req.body.description,
	});

	// Save Shell in the database
	shell
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Shell.",
			});
		});
};

// Retrieve and return all shells from the database.
exports.findAll = (req, res) => {
	Shell.find()
		.then((shells) => {
			res.send(shells);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving shells.",
			});
		});
};

// Find a single shell with a shellId
exports.findOne = (req, res) => {
	Shell.findById(req.params.shellId)
		.then((shell) => {
			if (!shell) {
				return res.status(404).send({
					message: "Shell not found with id " + req.params.shellId,
				});
			}
			res.send(shell);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Shell not found with id " + req.params.shellId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving shell with id " + req.params.shellId,
			});
		});
};

// Update a shell identified by the shellId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Shell content can not be empty",
	// 	});
	// }

	// Find shell and update it with the request body
	Shell.findByIdAndUpdate(
		req.params.shellId,
		{
			//shell_name: req.body.shell_name || "Untitled Shell",
			shell_name: req.body.shell_name,
			description: req.body.description,
		},
		{ new: true },
	)
		.then((shell) => {
			if (!shell) {
				return res.status(404).send({
					message: "Shell not found with id " + req.params.shellId,
				});
			}
			res.send(shell);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Shell not found with id " + req.params.shellId,
				});
			}
			return res.status(500).send({
				message: "Error updating shell with id " + req.params.shellId,
			});
		});
};

// Delete a shell with the specified shellId in the request
exports.delete = (req, res) => {
	Shell.findByIdAndRemove(req.params.shellId)
		.then((shell) => {
			if (!shell) {
				return res.status(404).send({
					message: "Shell not found with id " + req.params.shellId,
				});
			}
			res.send({ message: "Shell deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "Shell not found with id " + req.params.shellId,
				});
			}
			return res.status(500).send({
				message: "Could not delete shell with id " + req.params.shellId,
			});
		});
};
