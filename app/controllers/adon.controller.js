const Adons = require("../models/adon.model.js");

// Create and Save a new Adons
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Adons content can not be empty",
	// 	});
	// }

	// Create a Adons
	const adon = new Adons({
		company: req.body.company,
		product: req.body.product,
		adon_name: req.body.adon_name,
		adon_company: req.body.adon_company,
		adon_url: req.body.adon_url,
		cost: req.body.cost,
		notes: req.body.notes,
	});

	// Save Adons in the database
	adon.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Adons.",
			});
		});
};

// Retrieve and return all adons from the database.
exports.findAll = (req, res) => {
	Adons.find()
		.then((adons) => {
			res.send(adons);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving adons.",
			});
		});
};

// Find a single adon with a adonId
exports.findOne = (req, res) => {
	Adons.findById(req.params.adonId)
		.then((adon) => {
			if (!adon) {
				return res.status(404).send({
					message: "Adons not found with id " + req.params.adonId,
				});
			}
			res.send(adon);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Adons not found with id " + req.params.adonId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving adon with id " + req.params.adonId,
			});
		});
};

// Update a adon identified by the adonId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Adons content can not be empty",
	// 	});
	// }

	// Find adon and update it with the request body
	Adons.findByIdAndUpdate(
		req.params.adonId,
		{
			company: req.body.company,
			product: req.body.product,
			adon_name: req.body.adon_name,
			adon_company: req.body.adon_company,
			adon_url: req.body.adon_url,
			cost: req.body.cost,
			notes: req.body.notes,
		},
		{ new: true },
	)
		.then((adon) => {
			if (!adon) {
				return res.status(404).send({
					message: "Adons not found with id " + req.params.adonId,
				});
			}
			res.send(adon);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Adons not found with id " + req.params.adonId,
				});
			}
			return res.status(500).send({
				message: "Error updating adon with id " + req.params.adonId,
			});
		});
};

// Delete a adon with the specified adonId in the request
exports.delete = (req, res) => {
	Adons.findByIdAndRemove(req.params.adonId)
		.then((adon) => {
			if (!adon) {
				return res.status(404).send({
					message: "Adons not found with id " + req.params.adonId,
				});
			}
			res.send({ message: "Adons deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "Adons not found with id " + req.params.adonId,
				});
			}
			return res.status(500).send({
				message: "Could not delete adon with id " + req.params.adonId,
			});
		});
};
