module.exports = (app) => {
	const neural_projects = require("../controllers/neural_project.controller.js");

	// Create a new Note
	app.post("/api/neural_projects", neural_projects.create);

	// Retrieve all Notes
	app.get("/api/neural_projects", neural_projects.findAll);

	// Retrieve a single Note with neural_projectId
	app.get("/api/neural_projects/:neural_projectId", neural_projects.findOne);

	// Update a Note with neural_projectId
	app.patch("/api/neural_projects/:neural_projectId", neural_projects.update);

	// Delete a Note with neural_projectId
	app.delete(
		"/api/neural_projects/:neural_projectId",
		neural_projects.delete,
	);
};
