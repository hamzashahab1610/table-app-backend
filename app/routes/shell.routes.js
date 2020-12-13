module.exports = (app) => {
	const shells = require("../controllers/shell.controller.js");

	// Create a new Note
	app.post("/shells", shells.create);

	// Retrieve all Notes
	app.get("/shells", shells.findAll);

	// Retrieve a single Note with shellId
	app.get("/shells/:shellId", shells.findOne);

	// Update a Note with shellId
	app.patch("/shells/:shellId", shells.update);

	// Delete a Note with shellId
	app.delete("/shells/:shellId", shells.delete);
};
