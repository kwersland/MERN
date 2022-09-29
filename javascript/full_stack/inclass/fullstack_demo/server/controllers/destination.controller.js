const Destination = require("./../models/destination.model");

module.exports.testApi = (req, res) => {
    res.json({status: ok, message:'message from backend'})
}

module.exports.getAll = (req, res) => {
    Destination.find()
        .then(allDest => res.json(allDest))
        .catch(err => res.json(err))
}

module.exports.getOne = (req, res) => {
    const paramsId = req.params.id
    Destination.findOne({_id : paramsId})
        .then(dest => res.json(dest))
        .catch(err => res.json(err))
}

module.exports.addDest = (req, res) => {
    const newDest = req.body
    Destination.create(newDest)
        .then(dest => res.json(dest))
        .catch(err => res.json(err))
}

module.exports.updateDest = (req, res) => {
    const paramsId = req.params.id
    const updatedDest = req.body
    Destination.findOneAndUpdate(
        {_id : paramsId}, //criteria
        updatedDest, //updated info
        {new: true, runValidators: true}//options of how to show data
        //new : true --> return the updated object
        //runValidation --> to run validations
    )
        .then(updatedDest => res.json(updatedDest))
        .catch(err => res.json(err))
}

module.exports.delDest = (req, res) => {
    const paramsId = req.params.id
    Destination.findOneAndDelete({_id : paramsId})
        .then(deletedDest => json.res(deletedDest))
}
