module.exports = (app) => {
	const apps = require("../controllers/app.controller.js");

	// Create a new Note
	app.post("/apps", apps.create);

	// Retrieve all Notes
	app.get("/apps", apps.findAll);

	// Retrieve a single Note with appId
	app.get("/apps/:appId", apps.findOne);

	// Update a Note with appId
	app.patch("/apps/:appId", apps.update);

	// Delete a Note with appId
	app.delete("/apps/:appId", apps.delete);
};
