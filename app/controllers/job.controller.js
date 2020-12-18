const Job = require("../models/job.model.js");

// Create and Save a new Job
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Job content can not be empty",
	// 	});
	// }

	// Create a Job
	const job = new Job({
		company: req.body.company,
		date: req.body.date,
		job_title: req.body.job_title,
		location: req.body.location,
		job: req.body.job,
		description: req.body.description,
	});

	// Save Job in the database
	job.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Job.",
			});
		});
};

// Retrieve and return all jobs from the database.
exports.findAll = (req, res) => {
	Job.find()
		.then((jobs) => {
			res.send(jobs);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving jobs.",
			});
		});
};

// Find a single job with a jobId
exports.findOne = (req, res) => {
	Job.findById(req.params.jobId)
		.then((job) => {
			if (!job) {
				return res.status(404).send({
					message: "Job not found with id " + req.params.jobId,
				});
			}
			res.send(job);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Job not found with id " + req.params.jobId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving job with id " + req.params.jobId,
			});
		});
};

// Update a job identified by the jobId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Job content can not be empty",
	// 	});
	// }

	// Find job and update it with the request body
	Job.findByIdAndUpdate(
		req.params.jobId,
		{
			company: req.body.company,
			date: req.body.date,
			job_title: req.body.job_title,
			location: req.body.location,
			job: req.body.job,
			description: req.body.description,
		},
		{ new: true },
	)
		.then((job) => {
			if (!job) {
				return res.status(404).send({
					message: "Job not found with id " + req.params.jobId,
				});
			}
			res.send(job);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Job not found with id " + req.params.jobId,
				});
			}
			return res.status(500).send({
				message: "Error updating job with id " + req.params.jobId,
			});
		});
};

// Delete a job with the specified jobId in the request
exports.delete = (req, res) => {
	Job.findByIdAndRemove(req.params.jobId)
		.then((job) => {
			if (!job) {
				return res.status(404).send({
					message: "Job not found with id " + req.params.jobId,
				});
			}
			res.send({ message: "Job deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "Job not found with id " + req.params.jobId,
				});
			}
			return res.status(500).send({
				message: "Could not delete job with id " + req.params.jobId,
			});
		});
};
