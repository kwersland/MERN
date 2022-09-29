const DestinationController = require("./../controllers/destination.controller")

module.exports = (app) => {
    app.get("/api/test", DestinationController.testApi)
    app.get("/api/destinations", DestinationController.getAll)
    app.get("/api/destinations/:id", DestinationController.getOne)
    app.post("/api/destinations", DestinationController.addDest)
    app.put("/api/destinations/:id", DestinationController.updateDest)
    app.delete("/api/destinations/:id", DestinationController.delDest)

}