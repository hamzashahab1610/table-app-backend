const ReviewSite = require("../models/review_site.model.js");

// Create and Save a new ReviewSite
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "ReviewSite content can not be empty",
	// 	});
	// }

	// Create a ReviewSite
	const review_site = new ReviewSite({
		name: req.body.name,
		url: req.body.url,
		comments: req.body.comments,
	});

	// Save ReviewSite in the database
	review_site
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the ReviewSite.",
			});
		});
};

// Retrieve and return all review_sites from the database.
exports.findAll = (req, res) => {
	ReviewSite.find()
		.then((review_sites) => {
			res.send(review_sites);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving review_sites.",
			});
		});
};

// Find a single review_site with a review_siteId
exports.findOne = (req, res) => {
	ReviewSite.findById(req.params.review_siteId)
		.then((review_site) => {
			if (!review_site) {
				return res.status(404).send({
					message:
						"ReviewSite not found with id " +
						req.params.review_siteId,
				});
			}
			res.send(review_site);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"ReviewSite not found with id " +
						req.params.review_siteId,
				});
			}
			return res.status(500).send({
				message:
					"Error retrieving review_site with id " +
					req.params.review_siteId,
			});
		});
};

// Update a review_site identified by the review_siteId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "ReviewSite content can not be empty",
	// 	});
	// }

	// Find review_site and update it with the request body
	ReviewSite.findByIdAndUpdate(
		req.params.review_siteId,
		{
			name: req.body.name,
			url: req.body.url,
			comments: req.body.comments,
		},
		{ new: true },
	)
		.then((review_site) => {
			if (!review_site) {
				return res.status(404).send({
					message:
						"ReviewSite not found with id " +
						req.params.review_siteId,
				});
			}
			res.send(review_site);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"ReviewSite not found with id " +
						req.params.review_siteId,
				});
			}
			return res.status(500).send({
				message:
					"Error updating review_site with id " +
					req.params.review_siteId,
			});
		});
};

// Delete a review_site with the specified review_siteId in the request
exports.delete = (req, res) => {
	ReviewSite.findByIdAndRemove(req.params.review_siteId)
		.then((review_site) => {
			if (!review_site) {
				return res.status(404).send({
					message:
						"ReviewSite not found with id " +
						req.params.review_siteId,
				});
			}
			res.send({ message: "ReviewSite deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message:
						"ReviewSite not found with id " +
						req.params.review_siteId,
				});
			}
			return res.status(500).send({
				message:
					"Could not delete review_site with id " +
					req.params.review_siteId,
			});
		});
};
