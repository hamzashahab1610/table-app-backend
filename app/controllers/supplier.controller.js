const Suppliers = require("../models/supplier.model.js");

// Create and Save a new Suppliers
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Suppliers content can not be empty",
	// 	});
	// }

	// Create a Suppliers
	const supplier = new Suppliers({
		supplier_name: req.body.supplier_name,
		location: req.body.location,
		email: req.body.email,
		phone: req.body.phone,
		contact: req.body.contact,
		parts_supplied: req.body.parts_supplied,
		last_contact: req.body.last_contact,
		info: req.body.info,
	});

	// Save Suppliers in the database
	supplier
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Suppliers.",
			});
		});
};

// Retrieve and return all suppliers from the database.
exports.findAll = (req, res) => {
	Suppliers.find()
		.then((suppliers) => {
			res.send(suppliers);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving suppliers.",
			});
		});
};

// Find a single supplier with a supplierId
exports.findOne = (req, res) => {
	Suppliers.findById(req.params.supplierId)
		.then((supplier) => {
			if (!supplier) {
				return res.status(404).send({
					message:
						"Suppliers not found with id " + req.params.supplierId,
				});
			}
			res.send(supplier);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Suppliers not found with id " + req.params.supplierId,
				});
			}
			return res.status(500).send({
				message:
					"Error retrieving supplier with id " +
					req.params.supplierId,
			});
		});
};

// Update a supplier identified by the supplierId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Suppliers content can not be empty",
	// 	});
	// }

	// Find supplier and update it with the request body
	Suppliers.findByIdAndUpdate(
		req.params.supplierId,
		{
			supplier_name: req.body.supplier_name,
			location: req.body.location,
			email: req.body.email,
			phone: req.body.phone,
			contact: req.body.contact,
			parts_supplied: req.body.parts_supplied,
			last_contact: req.body.last_contact,
			info: req.body.info,
		},
		{ new: true },
	)
		.then((supplier) => {
			if (!supplier) {
				return res.status(404).send({
					message:
						"Suppliers not found with id " + req.params.supplierId,
				});
			}
			res.send(supplier);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Suppliers not found with id " + req.params.supplierId,
				});
			}
			return res.status(500).send({
				message:
					"Error updating supplier with id " + req.params.supplierId,
			});
		});
};

// Delete a supplier with the specified supplierId in the request
exports.delete = (req, res) => {
	Suppliers.findByIdAndRemove(req.params.supplierId)
		.then((supplier) => {
			if (!supplier) {
				return res.status(404).send({
					message:
						"Suppliers not found with id " + req.params.supplierId,
				});
			}
			res.send({ message: "Suppliers deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message:
						"Suppliers not found with id " + req.params.supplierId,
				});
			}
			return res.status(500).send({
				message:
					"Could not delete supplier with id " +
					req.params.supplierId,
			});
		});
};
