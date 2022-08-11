const { Schema, model } = require("mongoose");

// user model
const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: "Username is required",
  },
  email: {
    type: String,
    unique: true,
    required: "Email is required",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
  //Array of _id values referencing the Thought model
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  // Array of _id values referencing the User model (self-reference)
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = model("User", UserSchema);

module.export = User;
