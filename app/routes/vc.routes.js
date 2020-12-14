module.exports = (app) => {
	const vcs = require("../controllers/vc.controller.js");

	// Create a new Note
	app.post("/api/vcs", vcs.create);

	// Retrieve all Notes
	app.get("/api/vcs", vcs.findAll);

	// Retrieve a single Note with vcId
	app.get("/api/vcs/:vcId", vcs.findOne);

	// Update a Note with vcId
	app.patch("/api/vcs/:vcId", vcs.update);

	// Delete a Note with vcId
	app.delete("/api/vcs/:vcId", vcs.delete);
};
