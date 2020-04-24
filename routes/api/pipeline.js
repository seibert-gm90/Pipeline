const router = require("express").Router();
const pipelineController = require("../../controllers/pipelineController");

// Matches with "/api/books"
router.route("/pipeline")
  .get(pipelineController.findAll)
  .post(pipelineController.createAssistant);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(pipelineController.findById)
  .put(pipelineController.update)
  .delete(pipelineController.remove);

module.exports = router;