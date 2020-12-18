const Users = require("../models/user.model.js");
var admin = require("firebase-admin");

var serviceAccount = require("./react-table-app-firebase-adminsdk-e3971-4bca388872.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

async function updateUser(email, password, uid) {
	await admin.auth().updateUser(uid, {
		email: email,
		password: password,
	});
}

async function deleteUser(uid) {
	await admin
		.auth()
		.deleteUser(uid)
		.then(() => {
			console.log("Successfully deleted user");
		})
		.catch((error) => {
			console.log("Error deleting user:", error);
		});
}

// Create and Save a new Users
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Users content can not be empty",
	// 	});
	// }

	// Create a Users
	const user = new Users({
		user_name: req.body.user_name,
		user_email: req.body.user_email,
		user_password: req.body.user_password,
		user_role: req.body.user_role,
	});

	// Save Users in the database
	user.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Users.",
			});
		});
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
	Users.find()
		.then((users) => {
			res.send(users);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving users.",
			});
		});
};

// Find a single user with a userId
exports.findOne = (req, res) => {
	Users.findById(req.params.userId)
		.then((user) => {
			if (!user) {
				return res.status(404).send({
					message: "Users not found with id " + req.params.userId,
				});
			}
			res.send(user);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Users not found with id " + req.params.userId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving user with id " + req.params.userId,
			});
		});
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Users content can not be empty",
	// 	});
	// }

	// Find user and update it with the request body

	Users.findByIdAndUpdate(
		req.params.userId,
		{
			user_name: req.body.user_name,
			user_email: req.body.user_email,
			user_password: req.body.user_password,
			user_role: req.body.user_role,
		},
		{ new: true },
	)
		.then((user) => {
			if (!user) {
				return res.status(404).send({
					message: "Users not found with id " + req.params.userId,
				});
			}
			res.send(user);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Users not found with id " + req.params.userId,
				});
			}
			return res.status(500).send({
				message: "Error updating user with id " + req.params.userId,
			});
		});
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
	Users.findByIdAndRemove(req.params.userId)
		.then((user) => {
			if (!user) {
				return res.status(404).send({
					message: "Users not found with id " + req.params.userId,
				});
			}
			res.send({ message: "Users deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "Users not found with id " + req.params.userId,
				});
			}
			return res.status(500).send({
				message: "Could not delete user with id " + req.params.userId,
			});
		});
};
