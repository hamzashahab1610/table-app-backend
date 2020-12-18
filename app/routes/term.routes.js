module.exports = (app) => {
	const terms = require("../controllers/term.controller.js");

	// Create a new Note
	app.post("/api/terms", terms.create);

	// Retrieve all Notes
	app.get("/api/terms", terms.findAll);

	// Retrieve a single Note with termId
	app.get("/api/terms/:termId", terms.findOne);

	// Update a Note with termId
	app.patch("/api/terms/:termId", terms.update);

	// Delete a Note with termId
	app.delete("/api/terms/:termId", terms.delete);
};
