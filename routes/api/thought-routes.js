const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

// Set up GET all at /api/thoughts
router.route("/").get(getAllThoughts);

// POST at /api/thoughts/<userId>
router.route("/:userId").post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router.route("/:id").get(getThoughtById).put(updateThought);

// /api/thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId").delete(deleteThought);

module.exports = router;
