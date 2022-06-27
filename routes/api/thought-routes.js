const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  removeThought,
  updateThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThought).post(addThought);

router
  .route("/:id")
  .get(getThoughtById)
  .delete(removeThought)
  .put(updateThought)
  .post(addReaction);

router.route("/:thoughtid/reactions/:reactionid").delete(removeReaction);

module.exports = router;
