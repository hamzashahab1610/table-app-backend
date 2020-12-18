module.exports = (app) => {
	const users = require("../controllers/user.controller.js");

	// Create a new Note
	app.post("/api/users", users.create);

	// Retrieve all Notes
	app.get("/api/users", users.findAll);

	// Retrieve a single Note with userId
	app.get("/api/users/:userId", users.findOne);

	// Update a Note with userId
	app.patch("/api/users/:userId", users.update);

	// Delete a Note with userId
	app.delete("/api/users/:userId", users.delete);
};
