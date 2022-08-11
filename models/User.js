const { Schema, model } = require("mongoose");

// user model
const UserSchema = new Schema(
  {
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
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
