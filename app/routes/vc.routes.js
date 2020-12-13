module.exports = (app) => {
	const vcs = require("../controllers/vc.controller.js");

	// Create a new Note
	app.post("/vcs", vcs.create);

	// Retrieve all Notes
	app.get("/vcs", vcs.findAll);

	// Retrieve a single Note with vcId
	app.get("/vcs/:vcId", vcs.findOne);

	// Update a Note with vcId
	app.patch("/vcs/:vcId", vcs.update);

	// Delete a Note with vcId
	app.delete("/vcs/:vcId", vcs.delete);
};
