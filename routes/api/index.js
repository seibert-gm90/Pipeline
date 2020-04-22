const router = require("express").Router();
const pipelineRoutes = require("./pipeline");

// Book routes
router.use("/api", pipelineRoutes);

module.exports = router;