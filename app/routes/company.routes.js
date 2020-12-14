module.exports = (app) => {
	const companies = require("../controllers/company.controller.js");

	// Create a new Note
	app.post("/api/companies", companies.create);

	// Retrieve all Notes
	app.get("/api/companies", companies.findAll);

	// Retrieve a single Note with companyId
	app.get("/api/companies/:companyId", companies.findOne);

	// Update a Note with companyId
	app.patch("/api/companies/:companyId", companies.update);

	// Delete a Note with companyId
	app.delete("/api/companies/:companyId", companies.delete);
};
