const NameIdea = require("../models/name_idea.model.js");

// Create and Save a new NameIdea
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "NameIdea content can not be empty",
	// 	});
	// }

	// Create a NameIdea
	const name_idea = new NameIdea({
		name: req.body.name,
		url: req.body.url,
		available: req.body.available,
		cost: req.body.cost,
		app: req.body.app,
		info: req.body.info,
	});

	// Save NameIdea in the database
	name_idea
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the NameIdea.",
			});
		});
};

// Retrieve and return all name_ideas from the database.
exports.findAll = (req, res) => {
	NameIdea.find()
		.then((name_ideas) => {
			res.send(name_ideas);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving name_ideas.",
			});
		});
};

// Find a single name_idea with a name_ideaId
exports.findOne = (req, res) => {
	NameIdea.findById(req.params.name_ideaId)
		.then((name_idea) => {
			if (!name_idea) {
				return res.status(404).send({
					message:
						"NameIdea not found with id " + req.params.name_ideaId,
				});
			}
			res.send(name_idea);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"NameIdea not found with id " + req.params.name_ideaId,
				});
			}
			return res.status(500).send({
				message:
					"Error retrieving name_idea with id " +
					req.params.name_ideaId,
			});
		});
};

// Update a name_idea identified by the name_ideaId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "NameIdea content can not be empty",
	// 	});
	// }

	// Find name_idea and update it with the request body
	NameIdea.findByIdAndUpdate(
		req.params.name_ideaId,
		{
			name: req.body.name,
			url: req.body.url,
			available: req.body.available,
			cost: req.body.cost,
			app: req.body.app,
			info: req.body.info,
		},
		{ new: true },
	)
		.then((name_idea) => {
			if (!name_idea) {
				return res.status(404).send({
					message:
						"NameIdea not found with id " + req.params.name_ideaId,
				});
			}
			res.send(name_idea);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"NameIdea not found with id " + req.params.name_ideaId,
				});
			}
			return res.status(500).send({
				message:
					"Error updating name_idea with id " +
					req.params.name_ideaId,
			});
		});
};

// Delete a name_idea with the specified name_ideaId in the request
exports.delete = (req, res) => {
	NameIdea.findByIdAndRemove(req.params.name_ideaId)
		.then((name_idea) => {
			if (!name_idea) {
				return res.status(404).send({
					message:
						"NameIdea not found with id " + req.params.name_ideaId,
				});
			}
			res.send({ message: "NameIdea deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message:
						"NameIdea not found with id " + req.params.name_ideaId,
				});
			}
			return res.status(500).send({
				message:
					"Could not delete name_idea with id " +
					req.params.name_ideaId,
			});
		});
};
