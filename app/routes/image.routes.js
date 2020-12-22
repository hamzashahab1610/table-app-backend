module.exports = (app) => {
	const images = require("../controllers/image.controller.js");

	// Create a new Note
	app.post("/api/images", images.create);

	// Retrieve all Notes
	app.get("/api/images", images.findAll);

	// Retrieve a single Note with imageId
	app.get("/api/images/:imageId", images.findOne);

	// Update a Note with imageId
	app.patch("/api/images/:imageId", images.update);

	// Delete a Note with imageId
	app.delete("/api/images/:imageId", images.delete);
};
