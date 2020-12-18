module.exports = (app) => {
	const pricing = require("../controllers/pricing.controller.js");

	// Create a new Note
	app.post("/api/pricing", pricing.create);

	// Retrieve all Notes
	app.get("/api/pricing", pricing.findAll);

	// Retrieve a single Note with pricingId
	app.get("/api/pricing/:pricingId", pricing.findOne);

	// Update a Note with pricingId
	app.patch("/api/pricing/:pricingId", pricing.update);

	// Delete a Note with pricingId
	app.delete("/api/pricing/:pricingId", pricing.delete);
};
