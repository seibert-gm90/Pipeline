const router = require("express").Router();
const pipelineController = require("../../controllers/assistantController");

router.route("/pipeline")
  .get(pipelineController.findAll)
  .post(pipelineController.createAssistant);

router
  .route("/:id")
  .get(pipelineController.findById)
  .put(pipelineController.update)
  .delete(pipelineController.remove);

module.exports = router;