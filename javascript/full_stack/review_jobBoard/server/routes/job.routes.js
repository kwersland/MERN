const JobController = require("./../controllers/job.controller")

module.exports = (app) => {
    app.get("/api/test", JobController.testApi)
    app.get("/api", JobController.index)
    app.get("/api/Jobs", JobController.getAll)
    app.get("/api/jobs/:id", JobController.getOne)
    app.post("/api/jobs", JobController.addJob)
    app.put("/api/jobs/:id", JobController.updateJob)
    app.delete("/api/jobs/:id", JobController.delJob)

}