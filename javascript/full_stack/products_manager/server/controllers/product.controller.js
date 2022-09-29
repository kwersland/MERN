const {Product} = require('../models/product.model')

module.exports.index = (req, res) => {
    res.json({message: "Hello"})
}
module.exports.testApi = (req, res) => {
    res.json({status: ok, message:'message from backend'})
}

// Get all
module.exports.getAll = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.status(400).res.json(err))
}

// Get one
module.exports.getOne = (req, res) => {
    const paramsId = req.params.id
    Product.findOne({_id : paramsId})
        .then(prod => res.json(prod))
        .catch(err => res.status(400).json(err))
}

// create
module.exports.addProduct = (req, res) => {
    const newProduct = req.body
    Product.create(newProduct)
        .then(prod => res.json(prod))
        .catch(err => res.status(400).json(err))
}

// update
module.exports.updateProduct = (req, res) => {
    const paramsId = req.params.id
    const updatedProduct = req.body
    Product.findOneAndUpdate(
        {_id : paramsId}, //criteria
        updatedProduct, //updated info
        {new: true, runValidators: true}//options of how to show data
        //new : true --> return the updated object
        //runValidation --> to run validations
    )
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

// delete
module.exports.delProduct = (req, res) => {
    const paramsId = req.params.id
    Product.findOneAndDelete({_id : paramsId})
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => res.status(400).json(err))
}