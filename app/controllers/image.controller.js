const Image = require("../models/image.model.js");

// Create and Save a new Image
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Image content can not be empty",
	// 	});
	// }

	// Create a Image
	const image = new Image({
		image: req.body.name,
		image_url: req.body.url,
		description: req.body.description,
		image_type: req.body.type,
		option: req.body.option,
	});

	// Save Image in the database
	image
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Image.",
			});
		});
};

// Retrieve and return all images from the database.
exports.findAll = (req, res) => {
	Image.find()
		.then((images) => {
			res.send(images);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving images.",
			});
		});
};

// Find a single image with a imageId
exports.findOne = (req, res) => {
	Image.findById(req.params.imageId)
		.then((image) => {
			if (!image) {
				return res.status(404).send({
					message: "Image not found with id " + req.params.imageId,
				});
			}
			res.send(image);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Image not found with id " + req.params.imageId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving image with id " + req.params.imageId,
			});
		});
};

// Update a image identified by the imageId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Image content can not be empty",
	// 	});
	// }

	// Find image and update it with the request body
	Image.findByIdAndUpdate(
		req.params.imageId,
		{
			image: req.body.name,
			image_url: req.body.url,
			description: req.body.description,
			image_type: req.body.type,
			option: req.body.option,
		},
		{ new: true },
	)
		.then((image) => {
			if (!image) {
				return res.status(404).send({
					message: "Image not found with id " + req.params.imageId,
				});
			}
			res.send(image);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Image not found with id " + req.params.imageId,
				});
			}
			return res.status(500).send({
				message: "Error updating image with id " + req.params.imageId,
			});
		});
};

// Delete a image with the specified imageId in the request
exports.delete = (req, res) => {
	Image.findByIdAndRemove(req.params.imageId)
		.then((image) => {
			if (!image) {
				return res.status(404).send({
					message: "Image not found with id " + req.params.imageId,
				});
			}
			res.send({ message: "Image deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "Image not found with id " + req.params.imageId,
				});
			}
			return res.status(500).send({
				message: "Could not delete image with id " + req.params.imageId,
			});
		});
};
