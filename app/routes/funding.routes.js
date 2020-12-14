module.exports = (app) => {
	const fundings = require("../controllers/funding.controller.js");

	// Create a new Note
	app.post("/api/fundings", fundings.create);

	// Retrieve all Notes
	app.get("/api/fundings", fundings.findAll);

	// Retrieve a single Note with fundingId
	app.get("/api/fundings/:fundingId", fundings.findOne);

	// Update a Note with fundingId
	app.patch("/api/fundings/:fundingId", fundings.update);

	// Delete a Note with fundingId
	app.delete("/api/fundings/:fundingId", fundings.delete);
};
