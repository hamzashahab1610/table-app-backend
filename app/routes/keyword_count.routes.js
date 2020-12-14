module.exports = (app) => {
	const keyword_count = require("../controllers/keyword_count.controller.js");

	// Create a new Note
	app.post("/api/keyword_count", keyword_count.create);

	// Retrieve all Notes
	app.get("/api/keyword_count", keyword_count.findAll);

	// Retrieve a single Note with keyword_countId
	app.get("/api/keyword_count/:keyword_countId", keyword_count.findOne);

	// Update a Note with keyword_countId
	app.patch("/api/keyword_count/:keyword_countId", keyword_count.update);

	// Delete a Note with keyword_countId
	app.delete("/api/keyword_count/:keyword_countId", keyword_count.delete);
};
