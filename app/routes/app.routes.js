module.exports = (app) => {
	const apps = require("../controllers/app.controller.js");

	// Create a new Note
	app.post("/api/apps", apps.create);

	// Retrieve all Notes
	app.get("/api/apps", apps.findAll);

	// Retrieve a single Note with appId
	app.get("/api/apps/:appId", apps.findOne);

	// Update a Note with appId
	app.patch("/api/apps/:appId", apps.update);

	// Delete a Note with appId
	app.delete("/api/apps/:appId", apps.delete);
};
