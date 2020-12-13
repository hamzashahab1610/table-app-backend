module.exports = (app) => {
	const keywords = require("../controllers/keyword.controller.js");

	// Create a new Note
	app.post("/keywords", keywords.create);

	// Retrieve all Notes
	app.get("/keywords", keywords.findAll);

	// Retrieve a single Note with keywordId
	app.get("/keywords/:keywordId", keywords.findOne);

	// Update a Note with keywordId
	app.patch("/keywords/:keywordId", keywords.update);

	// Delete a Note with keywordId
	app.delete("/keywords/:keywordId", keywords.delete);
};
