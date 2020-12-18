module.exports = (app) => {
	const name_ideas = require("../controllers/name_idea.controller.js");

	// Create a new Note
	app.post("/api/name_ideas", name_ideas.create);

	// Retrieve all Notes
	app.get("/api/name_ideas", name_ideas.findAll);

	// Retrieve a single Note with name_ideaId
	app.get("/api/name_ideas/:name_ideaId", name_ideas.findOne);

	// Update a Note with name_ideaId
	app.patch("/api/name_ideas/:name_ideaId", name_ideas.update);

	// Delete a Note with name_ideaId
	app.delete("/api/name_ideas/:name_ideaId", name_ideas.delete);
};
