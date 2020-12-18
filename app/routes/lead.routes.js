module.exports = (app) => {
	const leads = require("../controllers/lead.controller.js");

	// Create a new Note
	app.post("/api/leads", leads.create);

	// Retrieve all Notes
	app.get("/api/leads", leads.findAll);

	// Retrieve a single Note with leadId
	app.get("/api/leads/:leadId", leads.findOne);

	// Update a Note with leadId
	app.patch("/api/leads/:leadId", leads.update);

	// Delete a Note with leadId
	app.delete("/api/leads/:leadId", leads.delete);
};
