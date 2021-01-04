module.exports = (app) => {
	const markets = require("../controllers/market.controller.js");

	// Create a new Note
	app.post("/api/markets", markets.create);

	// Retrieve all Notes
	app.get("/api/markets", markets.findAll);

	//Find Company Count
	app.get("/api/markets/:market_name", markets.findCompanyCount);

	// Retrieve a single Note with marketId
	app.get("/api/markets/:marketId", markets.findOne);

	// Update a Note with marketId
	app.patch("/api/markets/:marketId", markets.update);

	// Delete a Note with marketId
	app.delete("/api/markets/:marketId", markets.delete);
};
