module.exports = (app) => {
	const tools = require("../controllers/tool.controller.js");

	// Create a new Note
	app.post("/api/tools", tools.create);

	// Retrieve all Notes
	app.get("/api/tools", tools.findAll);

	// Retrieve a single Note with toolId
	app.get("/api/tools/:toolId", tools.findOne);

	// Update a Note with toolId
	app.patch("/api/tools/:toolId", tools.update);

	// Delete a Note with toolId
	app.delete("/api/tools/:toolId", tools.delete);
};
