const Pricing = require("../models/pricing.model.js");

// Create and Save a new Pricing
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Pricing content can not be empty",
	// 	});
	// }

	// Create a Pricing
	const pricing = new Pricing({
		company: req.body.company,
		product: req.body.product,
		plan: req.body.plan,
		cost: req.body.cost,
		date: req.body.date,
	});

	// Save Pricing in the database
	pricing
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Pricing.",
			});
		});
};

// Retrieve and return all pricings from the database.
exports.findAll = (req, res) => {
	Pricing.find()
		.then((pricings) => {
			res.send(pricings);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving pricings.",
			});
		});
};

// Find a single pricing with a pricingId
exports.findOne = (req, res) => {
	Pricing.findById(req.params.pricingId)
		.then((pricing) => {
			if (!pricing) {
				return res.status(404).send({
					message:
						"Pricing not found with id " + req.params.pricingId,
				});
			}
			res.send(pricing);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Pricing not found with id " + req.params.pricingId,
				});
			}
			return res.status(500).send({
				message:
					"Error retrieving pricing with id " + req.params.pricingId,
			});
		});
};

// Update a pricing identified by the pricingId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Pricing content can not be empty",
	// 	});
	// }

	// Find pricing and update it with the request body
	Pricing.findByIdAndUpdate(
		req.params.pricingId,
		{
			company: req.body.company,
			product: req.body.product,
			plan: req.body.plan,
			cost: req.body.cost,
			date: req.body.date,
		},
		{ new: true },
	)
		.then((pricing) => {
			if (!pricing) {
				return res.status(404).send({
					message:
						"Pricing not found with id " + req.params.pricingId,
				});
			}
			res.send(pricing);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Pricing not found with id " + req.params.pricingId,
				});
			}
			return res.status(500).send({
				message:
					"Error updating pricing with id " + req.params.pricingId,
			});
		});
};

// Delete a pricing with the specified pricingId in the request
exports.delete = (req, res) => {
	Pricing.findByIdAndRemove(req.params.pricingId)
		.then((pricing) => {
			if (!pricing) {
				return res.status(404).send({
					message:
						"Pricing not found with id " + req.params.pricingId,
				});
			}
			res.send({ message: "Pricing deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message:
						"Pricing not found with id " + req.params.pricingId,
				});
			}
			return res.status(500).send({
				message:
					"Could not delete pricing with id " + req.params.pricingId,
			});
		});
};
