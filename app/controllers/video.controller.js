const Video = require("../models/video.model.js");

// Create and Save a new Video
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Video content can not be empty",
	// 	});
	// }

	// Create a Video
	const video = new Video({
		video: req.body.name,
		video_url: req.body.video_url,
		companies: req.body.companies,
	});

	// Save Video in the database
	video
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Video.",
			});
		});
};

// Retrieve and return all videos from the database.
exports.findAll = (req, res) => {
	Video.find()
		.then((videos) => {
			res.send(videos);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving videos.",
			});
		});
};

// Find a single video with a videoId
exports.findOne = (req, res) => {
	Video.findById(req.params.videoId)
		.then((video) => {
			if (!video) {
				return res.status(404).send({
					message: "Video not found with id " + req.params.videoId,
				});
			}
			res.send(video);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Video not found with id " + req.params.videoId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving video with id " + req.params.videoId,
			});
		});
};

// Update a video identified by the videoId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Video content can not be empty",
	// 	});
	// }

	// Find video and update it with the request body
	Video.findByIdAndUpdate(
		req.params.videoId,
		{
			video: req.body.name,
			video_url: req.body.video_url,
			companies: req.body.companies,
		},
		{ new: true },
	)
		.then((video) => {
			if (!video) {
				return res.status(404).send({
					message: "Video not found with id " + req.params.videoId,
				});
			}
			res.send(video);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Video not found with id " + req.params.videoId,
				});
			}
			return res.status(500).send({
				message: "Error updating video with id " + req.params.videoId,
			});
		});
};

// Delete a video with the specified videoId in the request
exports.delete = (req, res) => {
	Video.findByIdAndRemove(req.params.videoId)
		.then((video) => {
			if (!video) {
				return res.status(404).send({
					message: "Video not found with id " + req.params.videoId,
				});
			}
			res.send({ message: "Video deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "Video not found with id " + req.params.videoId,
				});
			}
			return res.status(500).send({
				message: "Could not delete video with id " + req.params.videoId,
			});
		});
};
