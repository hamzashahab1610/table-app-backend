const Funding = require("../models/funding.model.js");

// Create and Save a new Funding
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Funding content can not be empty",
	// 	});
	// }

	// Create a Funding
	const funding = new Funding({
		vc_name: req.body.vc_name,
		company: req.body.company,
		market: req.body.market,
		date: req.body.date,
		amount: req.body.amount,
		round: req.body.round,
	});

	// Save Funding in the database
	funding
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Funding.",
			});
		});
};

// Retrieve and return all companies from the database.
exports.findAll = (req, res) => {
	Funding.find()
		.then((companies) => {
			res.send(companies);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving companies.",
			});
		});
};

// Find a single funding with a fundingId
exports.findOne = (req, res) => {
	Funding.findById(req.params.fundingId)
		.then((funding) => {
			if (!funding) {
				return res.status(404).send({
					message:
						"Funding not found with id " + req.params.fundingId,
				});
			}
			res.send(funding);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Funding not found with id " + req.params.fundingId,
				});
			}
			return res.status(500).send({
				message:
					"Error retrieving funding with id " + req.params.fundingId,
			});
		});
};

// Update a funding identified by the fundingId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Funding content can not be empty",
	// 	});
	// }

	// Find funding and update it with the request body
	Funding.findByIdAndUpdate(
		req.params.fundingId,
		{
			vc_name: req.body.vc_name,
			company: req.body.company,
			market: req.body.market,
			date: req.body.date,
			amount: req.body.amount,
			round: req.body.round,
		},
		{ new: true },
	)
		.then((funding) => {
			if (!funding) {
				return res.status(404).send({
					message:
						"Funding not found with id " + req.params.fundingId,
				});
			}
			res.send(funding);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Funding not found with id " + req.params.fundingId,
				});
			}
			return res.status(500).send({
				message:
					"Error updating funding with id " + req.params.fundingId,
			});
		});
};

// Delete a funding with the specified fundingId in the request
exports.delete = (req, res) => {
	Funding.findByIdAndRemove(req.params.fundingId)
		.then((funding) => {
			if (!funding) {
				return res.status(404).send({
					message:
						"Funding not found with id " + req.params.fundingId,
				});
			}
			res.send({ message: "Funding deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message:
						"Funding not found with id " + req.params.fundingId,
				});
			}
			return res.status(500).send({
				message:
					"Could not delete funding with id " + req.params.fundingId,
			});
		});
};
