const Leads = require("../models/lead.model.js");

// Create and Save a new Leads
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Leads content can not be empty",
	// 	});
	// }

	// Create a Leads
	const lead = new Leads({
		lead_name: req.body.lead_name,
		title: req.body.title,
		organization: req.body.organization,
		org_type: req.body.org_type,
		email: req.body.email,
		phone: req.body.phone,
		url: req.body.url,
		last_contact: req.body.last_contact,
		notes: req.body.notes,
	});

	// Save Leads in the database
	lead.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Leads.",
			});
		});
};

// Retrieve and return all leads from the database.
exports.findAll = (req, res) => {
	Leads.find()
		.then((leads) => {
			res.send(leads);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving leads.",
			});
		});
};

// Find a single lead with a leadId
exports.findOne = (req, res) => {
	Leads.findById(req.params.leadId)
		.then((lead) => {
			if (!lead) {
				return res.status(404).send({
					message: "Leads not found with id " + req.params.leadId,
				});
			}
			res.send(lead);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Leads not found with id " + req.params.leadId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving lead with id " + req.params.leadId,
			});
		});
};

// Update a lead identified by the leadId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Leads content can not be empty",
	// 	});
	// }

	// Find lead and update it with the request body
	Leads.findByIdAndUpdate(
		req.params.leadId,
		{
			lead_name: req.body.lead_name,
			title: req.body.title,
			organization: req.body.organization,
			org_type: req.body.org_type,
			email: req.body.email,
			phone: req.body.phone,
			url: req.body.url,
			last_contact: req.body.last_contact,
			notes: req.body.notes,
		},
		{ new: true },
	)
		.then((lead) => {
			if (!lead) {
				return res.status(404).send({
					message: "Leads not found with id " + req.params.leadId,
				});
			}
			res.send(lead);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Leads not found with id " + req.params.leadId,
				});
			}
			return res.status(500).send({
				message: "Error updating lead with id " + req.params.leadId,
			});
		});
};

// Delete a lead with the specified leadId in the request
exports.delete = (req, res) => {
	Leads.findByIdAndRemove(req.params.leadId)
		.then((lead) => {
			if (!lead) {
				return res.status(404).send({
					message: "Leads not found with id " + req.params.leadId,
				});
			}
			res.send({ message: "Leads deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "Leads not found with id " + req.params.leadId,
				});
			}
			return res.status(500).send({
				message: "Could not delete lead with id " + req.params.leadId,
			});
		});
};
