const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// Set up GET all and POST at /api/Users
router.route("/").get(getAllUsers).post(createUser);

// Set up GET one, PUT, and DELETE at /api/Users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// /api/Users/:userId/:friendId
router.route("/:userId/:friendId").put(addFriend).delete(removeFriend);

module.exports = router;
