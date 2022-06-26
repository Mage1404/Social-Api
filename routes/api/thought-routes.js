const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/comments/<pizzaId>
router.route("/").post(getAllThought, addThought);

// /api/comments/<pizzaId>/<commentId>
router.route("/:id").get(getThoughtById).put(addReaction).delete(removeThought);

router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
