const Vc = require("../models/vc.model.js");

// Create and Save a new Vc
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Vc content can not be empty",
	// 	});
	// }

	// Create a Vc
	const vc = new Vc({
		vc_name: req.body.vc_name,
		location: req.body.location,
		markets: req.body.markets,
		companies_funded: req.body.companies_funded,
		url: req.body.url,
		contacts: req.body.contacts,
		investment_criteria: req.body.investment_criteria,
	});

	// Save Vc in the database
	vc.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while creating the Vc.",
			});
		});
};

// Retrieve and return all vcs from the database.
exports.findAll = (req, res) => {
	Vc.find()
		.then((vcs) => {
			res.send(vcs);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving vcs.",
			});
		});
};

// Find a single vc with a vcId
exports.findOne = (req, res) => {
	Vc.findById(req.params.vcId)
		.then((vc) => {
			if (!vc) {
				return res.status(404).send({
					message: "Vc not found with id " + req.params.vcId,
				});
			}
			res.send(vc);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Vc not found with id " + req.params.vcId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving vc with id " + req.params.vcId,
			});
		});
};

// Update a vc identified by the vcId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Vc content can not be empty",
	// 	});
	// }

	// Find vc and update it with the request body
	Vc.findByIdAndUpdate(
		req.params.vcId,
		{
			vc_name: req.body.vc_name,
			location: req.body.location,
			markets: req.body.markets,
			companies_funded: req.body.companies_funded,
			url: req.body.url,
			contacts: req.body.contacts,
			investment_criteria: req.body.investment_criteria,
		},
		{ new: true },
	)
		.then((vc) => {
			if (!vc) {
				return res.status(404).send({
					message: "Vc not found with id " + req.params.vcId,
				});
			}
			res.send(vc);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Vc not found with id " + req.params.vcId,
				});
			}
			return res.status(500).send({
				message: "Error updating vc with id " + req.params.vcId,
			});
		});
};

// Delete a vc with the specified vcId in the request
exports.delete = (req, res) => {
	Vc.findByIdAndRemove(req.params.vcId)
		.then((vc) => {
			if (!vc) {
				return res.status(404).send({
					message: "Vc not found with id " + req.params.vcId,
				});
			}
			res.send({ message: "Vc deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "Vc not found with id " + req.params.vcId,
				});
			}
			return res.status(500).send({
				message: "Could not delete vc with id " + req.params.vcId,
			});
		});
};
