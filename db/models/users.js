const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  user_decks: [{ type: mongoose.Schema.Types.ObjectId, ref: "decks" }],
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
