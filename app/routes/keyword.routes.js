module.exports = (app) => {
	const keywords = require("../controllers/keyword.controller.js");

	// Create a new Note
	app.post("/api/keywords", keywords.create);

	// Retrieve all Notes
	app.get("/api/keywords", keywords.findAll);

	// Retrieve a single Note with keywordId
	app.get("/api/keywords/:keywordId", keywords.findOne);

	// Update a Note with keywordId
	app.patch("/api/keywords/:keywordId", keywords.update);

	// Delete a Note with keywordId
	app.delete("/api/keywords/:keywordId", keywords.delete);
};
