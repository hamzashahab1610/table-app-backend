module.exports = (app) => {
	const jobs = require("../controllers/job.controller.js");

	// Create a new Note
	app.post("/api/jobs", jobs.create);

	// Retrieve all Notes
	app.get("/api/jobs", jobs.findAll);

	// Retrieve a single Note with jobId
	app.get("/api/jobs/:jobId", jobs.findOne);

	// Update a Note with jobId
	app.patch("/api/jobs/:jobId", jobs.update);

	// Delete a Note with jobId
	app.delete("/api/jobs/:jobId", jobs.delete);
};
