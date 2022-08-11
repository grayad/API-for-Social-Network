const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    validate: [
      ({ length }) => length <= 280,
      "Thought should be less than 280 characters.",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: {
    // TODO: add reaction schema?
  },
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
