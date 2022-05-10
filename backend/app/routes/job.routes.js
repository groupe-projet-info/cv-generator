module.exports = app => {
    const job = require("../controllers/job.controller.js");
    var job_router = require("express").Router();
    job_router.post("/", job.create);
    job_router.get("/", job.findAll);
    job_router.delete("/:id", job.delete);
    job_router.delete("/", job.deleteAll);
    app.use('/api/job', job_router);
  };