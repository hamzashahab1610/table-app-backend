module.exports = (app) => {
	const markets = require("../controllers/market.controller.js");

	// Create a new Note
	app.post("/markets", markets.create);

	// Retrieve all Notes
	app.get("/markets", markets.findAll);

	// Retrieve a single Note with marketId
	app.get("/markets/:marketId", markets.findOne);

	// Update a Note with marketId
	app.patch("/markets/:marketId", markets.update);

	// Delete a Note with marketId
	app.delete("/markets/:marketId", markets.delete);
};
