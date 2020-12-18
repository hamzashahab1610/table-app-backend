const Tool = require("../models/tool.model.js");

// Create and Save a new Tool
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Tool content can not be empty",
	// 	});
	// }

	// Create a Tool
	const tool = new Tool({
		tool_name: req.body.tool_name,
		url: req.body.url,
		cost: req.body.cost,
		description: req.body.description,
	});

	// Save Tool in the database
	tool.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Tool.",
			});
		});
};

// Retrieve and return all tools from the database.
exports.findAll = (req, res) => {
	Tool.find()
		.then((tools) => {
			res.send(tools);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving tools.",
			});
		});
};

// Find a single tool with a toolId
exports.findOne = (req, res) => {
	Tool.findById(req.params.toolId)
		.then((tool) => {
			if (!tool) {
				return res.status(404).send({
					message: "Tool not found with id " + req.params.toolId,
				});
			}
			res.send(tool);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Tool not found with id " + req.params.toolId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving tool with id " + req.params.toolId,
			});
		});
};

// Update a tool identified by the toolId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Tool content can not be empty",
	// 	});
	// }

	// Find tool and update it with the request body
	Tool.findByIdAndUpdate(
		req.params.toolId,
		{
			tool_name: req.body.tool_name,
			url: req.body.url,
			cost: req.body.cost,
			description: req.body.description,
		},
		{ new: true },
	)
		.then((tool) => {
			if (!tool) {
				return res.status(404).send({
					message: "Tool not found with id " + req.params.toolId,
				});
			}
			res.send(tool);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Tool not found with id " + req.params.toolId,
				});
			}
			return res.status(500).send({
				message: "Error updating tool with id " + req.params.toolId,
			});
		});
};

// Delete a tool with the specified toolId in the request
exports.delete = (req, res) => {
	Tool.findByIdAndRemove(req.params.toolId)
		.then((tool) => {
			if (!tool) {
				return res.status(404).send({
					message: "Tool not found with id " + req.params.toolId,
				});
			}
			res.send({ message: "Tool deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "Tool not found with id " + req.params.toolId,
				});
			}
			return res.status(500).send({
				message: "Could not delete tool with id " + req.params.toolId,
			});
		});
};
