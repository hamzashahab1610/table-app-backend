module.exports = (app) => {
	const adons = require("../controllers/adon.controller.js");

	// Create a new Note
	app.post("/api/adons", adons.create);

	// Retrieve all Notes
	app.get("/api/adons", adons.findAll);

	// Retrieve a single Note with adonId
	app.get("/api/adons/:adonId", adons.findOne);

	// Update a Note with adonId
	app.patch("/api/adons/:adonId", adons.update);

	// Delete a Note with adonId
	app.delete("/api/adons/:adonId", adons.delete);
};
