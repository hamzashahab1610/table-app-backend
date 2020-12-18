const mongoose = require("mongoose");

const SupplierSchema = mongoose.Schema(
	{
		supplier_name: String,
		location: String,
		email: String,
		phone: String,
		contact: String,
		parts_supplied: String,
		last_contact: String,
		info: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Supplier", SupplierSchema);
