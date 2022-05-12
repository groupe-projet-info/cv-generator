const { authJwt } = require("../middlewares");
const job = require("../controllers/job.controller.js");

module.exports = app => {
    
    var job_router = require("express").Router();

    //Update
    job_router.post("/:cv_id/job", job.add_job);

    //Getter
    job_router.get("/:cv_id/job", job.find_all_jobs);
    
    //Delete
    job_router.delete("/:cv_id/job/:job_id",  job.remove_one_job);
    job_router.delete("/:cv_id/job", job.remove_all_jobs);

    app.use("/api/cv", job_router);
  };