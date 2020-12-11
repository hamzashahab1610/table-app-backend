module.exports = (app) => {
	const companies = require("../controllers/company.controller.js");

	// Create a new Note
	app.post("/companies", companies.create);

	// Retrieve all Notes
	app.get("/companies", companies.findAll);

	// Retrieve a single Note with companyId
	app.get("/companies/:companyId", companies.findOne);

	// Update a Note with companyId
	app.patch("/companies/:companyId", companies.update);

	// Delete a Note with companyId
	app.delete("/companies/:companyId", companies.delete);
};
