module.exports = (app) => {
	const questions = require("../controllers/question.controller.js");

	// Create a new Note
	app.post("/api/questions", questions.create);

	// Retrieve all Notes
	app.get("/api/questions", questions.findAll);

	// Retrieve a single Note with questionId
	app.get("/api/questions/:questionId", questions.findOne);

	// Update a Note with questionId
	app.patch("/api/questions/:questionId", questions.update);

	// Delete a Note with questionId
	app.delete("/api/questions/:questionId", questions.delete);
};
