module.exports = (app) => {
	const integrations = require("../controllers/integration.controller.js");

	// Create a new Note
	app.post("/api/integrations", integrations.create);

	// Retrieve all Notes
	app.get("/api/integrations", integrations.findAll);

	// Retrieve a single Note with integrationId
	app.get("/api/integrations/:integrationId", integrations.findOne);

	// Update a Note with integrationId
	app.patch("/api/integrations/:integrationId", integrations.update);

	// Delete a Note with integrationId
	app.delete("/api/integrations/:integrationId", integrations.delete);
};
