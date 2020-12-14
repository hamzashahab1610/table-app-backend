const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create express app
const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
	.connect(dbConfig.url, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("Successfully connected to the database");
	})
	.catch((err) => {
		console.log("Could not connect to the database. Exiting now...", err);
		process.exit();
	});

// define a simple route
// app.get("/", (req, res) => {
// 	res.json({
// 		message:
// 			"Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes.",
// 	});
// });

require("./app/routes/note.routes.js")(app);
require("./app/routes/market.routes.js")(app);
require("./app/routes/company.routes.js")(app);
require("./app/routes/keyword.routes.js")(app);
require("./app/routes/keyword_count.routes.js")(app);
require("./app/routes/app.routes.js")(app);
require("./app/routes/model.routes.js")(app);
require("./app/routes/shell.routes.js")(app);
require("./app/routes/shell.routes.js")(app);
require("./app/routes/ad.routes.js")(app);
require("./app/routes/vc.routes.js")(app);
require("./app/routes/funding.routes.js")(app);

// Set static folder
app.use(express.static("build"));

// index.html for all page routes
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
//}

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server Running at ${port}`);
});
