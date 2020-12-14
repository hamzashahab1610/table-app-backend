module.exports = (app) => {
	const models = require("../controllers/model.controller.js");

	// Create a new Note
	app.post("/api/models", models.create);

	// Retrieve all Notes
	app.get("/api/models", models.findAll);

	// Retrieve a single Note with modelId
	app.get("/api/models/:modelId", models.findOne);

	// Update a Note with modelId
	app.patch("/api/models/:modelId", models.update);

	// Delete a Note with modelId
	app.delete("/api/models/:modelId", models.delete);
};
