module.exports = app => {
    const job = require("../controllers/job.controller.js");
    var job_router = require("express").Router();

    job_router.get("/:cv_id/job", job.find_all_jobs);
    job_router.post("/:cv_id/job", job.add_job);
    //job_router.delete("/:cv_id/job", job.remove_all_jobs);

    app.use("/api/cv", job_router);
  };