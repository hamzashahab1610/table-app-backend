module.exports = (app) => {
	const files = require("../controllers/file.controller.js");

	// Create a new Note
	app.post("/api/files", files.create);

	// Retrieve all Notes
	app.get("/api/files", files.findAll);

	// Retrieve a single Note with fileId
	app.get("/api/files/:fileId", files.findOne);

	// Update a Note with fileId
	app.patch("/api/files/:fileId", files.update);

	// Delete a Note with fileId
	app.delete("/api/files/:fileId", files.delete);
};
