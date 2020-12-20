const News = require("../models/news.model.js");

// Create and Save a new News
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "News content can not be empty",
	// 	});
	// }

	// Create a News
	const news = new News({
		date: req.body.date,
		source: req.body.source,
		company: req.body.company,
		title: req.body.title,
		link: req.body.link,
	});

	// Save News in the database
	news.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the News.",
			});
		});
};

// Retrieve and return all newss from the database.
exports.findAll = (req, res) => {
	News.find()
		.then((newss) => {
			res.send(newss);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving newss.",
			});
		});
};

// Find a single news with a newsId
exports.findOne = (req, res) => {
	News.findById(req.params.newsId)
		.then((news) => {
			if (!news) {
				return res.status(404).send({
					message: "News not found with id " + req.params.newsId,
				});
			}
			res.send(news);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "News not found with id " + req.params.newsId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving news with id " + req.params.newsId,
			});
		});
};

// Update a news identified by the newsId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "News content can not be empty",
	// 	});
	// }

	// Find news and update it with the request body
	News.findByIdAndUpdate(
		req.params.newsId,
		{
			date: req.body.date,
			source: req.body.source,
			company: req.body.company,
			title: req.body.title,
			link: req.body.link,
		},
		{ new: true },
	)
		.then((news) => {
			if (!news) {
				return res.status(404).send({
					message: "News not found with id " + req.params.newsId,
				});
			}
			res.send(news);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "News not found with id " + req.params.newsId,
				});
			}
			return res.status(500).send({
				message: "Error updating news with id " + req.params.newsId,
			});
		});
};

// Delete a news with the specified newsId in the request
exports.delete = (req, res) => {
	News.findByIdAndRemove(req.params.newsId)
		.then((news) => {
			if (!news) {
				return res.status(404).send({
					message: "News not found with id " + req.params.newsId,
				});
			}
			res.send({ message: "News deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "News not found with id " + req.params.newsId,
				});
			}
			return res.status(500).send({
				message: "Could not delete news with id " + req.params.newsId,
			});
		});
};
