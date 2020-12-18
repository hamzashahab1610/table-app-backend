module.exports = (app) => {
	const features = require("../controllers/feature.controller.js");

	// Create a new Note
	app.post("/api/features", features.create);

	// Retrieve all Notes
	app.get("/api/features", features.findAll);

	// Retrieve a single Note with featureId
	app.get("/api/features/:featureId", features.findOne);

	// Update a Note with featureId
	app.patch("/api/features/:featureId", features.update);

	// Delete a Note with featureId
	app.delete("/api/features/:featureId", features.delete);
};
