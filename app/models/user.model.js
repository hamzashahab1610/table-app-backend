const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
	{
		user_name: String,
		user_email: String,
		user_password: Number,
		user_role: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("User", UserSchema);
