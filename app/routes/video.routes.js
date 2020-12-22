module.exports = (app) => {
	const videos = require("../controllers/video.controller.js");

	// Create a new Note
	app.post("/api/videos", videos.create);

	// Retrieve all Notes
	app.get("/api/videos", videos.findAll);

	// Retrieve a single Note with videoId
	app.get("/api/videos/:videoId", videos.findOne);

	// Update a Note with videoId
	app.patch("/api/videos/:videoId", videos.update);

	// Delete a Note with videoId
	app.delete("/api/videos/:videoId", videos.delete);
};
