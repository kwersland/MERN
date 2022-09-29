const ProductController = require("./../controllers/product.controller")

module.exports = (app) => {
    app.get("/api/test", ProductController.testApi)
    app.get("/api", ProductController.index)
    app.get("/api/products", ProductController.getAll)
    app.get("/api/products/:id", ProductController.getOne)
    app.post("/api/products", ProductController.addProduct)
    app.put("/api/products/:id", ProductController.updateProduct)
    app.delete("/api/products/:id", ProductController.delProduct)
}