const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// Set up GET all at /api/thoughts
router.route("/").get(getAllThoughts);

// POST at /api/thoughts/<userId>
router.route("/:userId").post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router.route("/:thoughtId").get(getThoughtById).put(updateThought);

// /api/thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId").put(addReaction).delete(deleteThought);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
