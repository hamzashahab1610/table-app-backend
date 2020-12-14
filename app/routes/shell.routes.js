module.exports = (app) => {
	const shells = require("../controllers/shell.controller.js");

	// Create a new Note
	app.post("/api/shells", shells.create);

	// Retrieve all Notes
	app.get("/api/shells", shells.findAll);

	// Retrieve a single Note with shellId
	app.get("/api/shells/:shellId", shells.findOne);

	// Update a Note with shellId
	app.patch("/api/shells/:shellId", shells.update);

	// Delete a Note with shellId
	app.delete("/api/shells/:shellId", shells.delete);
};
