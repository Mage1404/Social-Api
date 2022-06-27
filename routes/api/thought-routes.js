const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  removeThought,
} = require("../../controllers/thought-controller");

// /api/comments/<pizzaId>
router.route("/").get(getAllThought).post(addThought);

// /api/comments/<pizzaId>/<commentId>
router.route("/:id").get(getThoughtById).delete(removeThought);

module.exports = router;
