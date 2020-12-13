module.exports = (app) => {
	const models = require("../controllers/model.controller.js");

	// Create a new Note
	app.post("/models", models.create);

	// Retrieve all Notes
	app.get("/models", models.findAll);

	// Retrieve a single Note with modelId
	app.get("/models/:modelId", models.findOne);

	// Update a Note with modelId
	app.patch("/models/:modelId", models.update);

	// Delete a Note with modelId
	app.delete("/models/:modelId", models.delete);
};
