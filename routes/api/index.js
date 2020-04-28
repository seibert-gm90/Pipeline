const router = require("express").Router();
const pipelineRoutes = require("./pipeline");

router.use("/api", pipelineRoutes);

module.exports = router;