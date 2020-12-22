const File = require("../models/file.model.js");

// Create and Save a new File
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "File content can not be empty",
	// 	});
	// }

	// Create a File
	const file = new File({
		file: req.body.name,
		file_url: req.body.url,
		description: req.body.description,
		file_type: req.body.type,
	});

	// Save File in the database
	file.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the File.",
			});
		});
};

// Retrieve and return all files from the database.
exports.findAll = (req, res) => {
	File.find()
		.then((files) => {
			res.send(files);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving files.",
			});
		});
};

// Find a single file with a fileId
exports.findOne = (req, res) => {
	File.findById(req.params.fileId)
		.then((file) => {
			if (!file) {
				return res.status(404).send({
					message: "File not found with id " + req.params.fileId,
				});
			}
			res.send(file);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "File not found with id " + req.params.fileId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving file with id " + req.params.fileId,
			});
		});
};

// Update a file identified by the fileId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "File content can not be empty",
	// 	});
	// }

	// Find file and update it with the request body
	File.findByIdAndUpdate(
		req.params.fileId,
		{
			file: req.body.name,
			file_url: req.body.url,
			description: req.body.description,
			file_type: req.body.type,
		},
		{ new: true },
	)
		.then((file) => {
			if (!file) {
				return res.status(404).send({
					message: "File not found with id " + req.params.fileId,
				});
			}
			res.send(file);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "File not found with id " + req.params.fileId,
				});
			}
			return res.status(500).send({
				message: "Error updating file with id " + req.params.fileId,
			});
		});
};

// Delete a file with the specified fileId in the request
exports.delete = (req, res) => {
	File.findByIdAndRemove(req.params.fileId)
		.then((file) => {
			if (!file) {
				return res.status(404).send({
					message: "File not found with id " + req.params.fileId,
				});
			}
			res.send({ message: "File deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "File not found with id " + req.params.fileId,
				});
			}
			return res.status(500).send({
				message: "Could not delete file with id " + req.params.fileId,
			});
		});
};
