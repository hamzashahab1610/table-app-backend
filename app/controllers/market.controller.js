const Market = require("../models/market.model.js");

// Create and Save a new Market
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Market content can not be empty",
	// 	});
	// }

	// Create a Market
	const market = new Market({
		market_name: req.body.market_name || "Untitled Market",
		companies: req.body.companies,
		keywords: req.body.keywords,
		market_size: req.body.market_size,
	});

	// Save Market in the database
	market
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Market.",
			});
		});
};

// Retrieve and return all markets from the database.
exports.findAll = (req, res) => {
	Market.find()
		.then((markets) => {
			res.send(markets);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving markets.",
			});
		});
};

// Find a single market with a marketId
exports.findOne = (req, res) => {
	Market.findById(req.params.marketId)
		.then((market) => {
			if (!market) {
				return res.status(404).send({
					message: "Market not found with id " + req.params.marketId,
				});
			}
			res.send(market);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Market not found with id " + req.params.marketId,
				});
			}
			return res.status(500).send({
				message:
					"Error retrieving market with id " + req.params.marketId,
			});
		});
};

// Update a market identified by the marketId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Market content can not be empty",
	// 	});
	// }

	// Find market and update it with the request body
	Market.findByIdAndUpdate(
		req.params.marketId,
		{
			market_name: req.body.market_name || "Untitled Market",
			companies: req.body.companies,
			keywords: req.body.keywords,
			market_size: req.body.market_size,
		},
		{ new: true },
	)
		.then((market) => {
			if (!market) {
				return res.status(404).send({
					message: "Market not found with id " + req.params.marketId,
				});
			}
			res.send(market);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Market not found with id " + req.params.marketId,
				});
			}
			return res.status(500).send({
				message: "Error updating market with id " + req.params.marketId,
			});
		});
};

// Delete a market with the specified marketId in the request
exports.delete = (req, res) => {
	Market.findByIdAndRemove(req.params.marketId)
		.then((market) => {
			if (!market) {
				return res.status(404).send({
					message: "Market not found with id " + req.params.marketId,
				});
			}
			res.send({ message: "Market deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "Market not found with id " + req.params.marketId,
				});
			}
			return res.status(500).send({
				message:
					"Could not delete market with id " + req.params.marketId,
			});
		});
};
