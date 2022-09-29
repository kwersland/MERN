const Joke = require("../models/joke.model");

module.exports.testApi = (req, res) => {
    res.json({status: ok})
}

module.exports.getAll = (req, res) => {
    Joke.find()
        .then(allJoke => res.json(allJoke))
        .catch(err => res.json(err))
}

module.exports.getOne = (req, res) => {
    const paramsId = req.params.id
    Joke.findOne({_id : paramsId})
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

module.exports.addJoke = (req, res) => {
    const newJoke = req.body
    Joke.create(newJoke)
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

module.exports.updateJoke = (req, res) => {
    const paramsId = req.params.id
    const updatedJoke = req.body
    Joke.findOneAndUpdate(
        {_id : paramsId}, //criteria
        updatedJoke, //updated info
        {new: true, runValidators: true}//options of how to show data
        //new : true --> return the updated object
        //runValidation --> to run validations
    )
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json(err))
}

module.exports.delJoke = (req, res) => {
    const paramsId = req.params.id
    Joke.findOneAndDelete({_id : paramsId})
        .then(deletedJoke => json.res(deletedJoke))
}
