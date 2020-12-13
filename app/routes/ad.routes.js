module.exports = (app) => {
	const ads = require("../controllers/ad.controller.js");

	// Create a new Note
	app.post("/ads", ads.create);

	// Retrieve all Notes
	app.get("/ads", ads.findAll);

	// Retrieve a single Note with adId
	app.get("/ads/:adId", ads.findOne);

	// Update a Note with adId
	app.patch("/ads/:adId", ads.update);

	// Delete a Note with adId
	app.delete("/ads/:adId", ads.delete);
};
