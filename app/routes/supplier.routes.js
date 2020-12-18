module.exports = (app) => {
	const suppliers = require("../controllers/supplier.controller.js");

	// Create a new Note
	app.post("/api/suppliers", suppliers.create);

	// Retrieve all Notes
	app.get("/api/suppliers", suppliers.findAll);

	// Retrieve a single Note with supplierId
	app.get("/api/suppliers/:supplierId", suppliers.findOne);

	// Update a Note with supplierId
	app.patch("/api/suppliers/:supplierId", suppliers.update);

	// Delete a Note with supplierId
	app.delete("/api/suppliers/:supplierId", suppliers.delete);
};
