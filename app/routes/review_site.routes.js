module.exports = (app) => {
	const review_sites = require("../controllers/review_site.controller.js");

	// Create a new Note
	app.post("/api/review_sites", review_sites.create);

	// Retrieve all Notes
	app.get("/api/review_sites", review_sites.findAll);

	// Retrieve a single Note with review_siteId
	app.get("/api/review_sites/:review_siteId", review_sites.findOne);

	// Update a Note with review_siteId
	app.patch("/api/review_sites/:review_siteId", review_sites.update);

	// Delete a Note with review_siteId
	app.delete("/api/review_sites/:review_siteId", review_sites.delete);
};
