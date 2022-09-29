const ProjectController = require('./../controllers/project.controller')

module.exports = (app) => {
    app.get('/api/test', ProjectController.testApi)
    app.get('/api', ProjectController.index)
    app.get("/api/projects", ProjectController.getAll)
    app.get("/api/projects/:id", ProjectController.getOne)
    app.post("/api/projects", ProjectController.addProject)
    app.put("/api/projects/:id", ProjectController.updateProject)
    app.delete("/api/projects/:id", ProjectController.delProject)
}