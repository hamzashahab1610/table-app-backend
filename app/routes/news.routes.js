module.exports = (app) => {
	const news = require("../controllers/news.controller.js");

	// Create a new Note
	app.post("/api/news", news.create);

	// Retrieve all Notes
	app.get("/api/news", news.findAll);

	// Retrieve a single Note with newsId
	app.get("/api/news/:newsId", news.findOne);

	// Update a Note with newsId
	app.patch("/api/news/:newsId", news.update);

	// Delete a Note with newsId
	app.delete("/api/news/:newsId", news.delete);
};
