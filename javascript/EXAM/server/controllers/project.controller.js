const {Project} = require('../models/project.model')

module.exports.index = (req, res) => {
    res.json({message: "Hello"})
}
module.exports.testApi = (req, res) => {
    res.json({status: ok, message:'message from backend'})
}

// Get all
module.exports.getAll = (req, res) => {
    Project.find()
        .then(allProjects => res.json(allProjects))
        .catch(err => res.status(400).res.json(err))
}

// Get one
module.exports.getOne = (req, res) => {
    const paramsId = req.params.id
    Project.findOne({_id : paramsId})
        .then(proj => res.json(proj))
        .catch(err => res.status(400).json(err))
}

// create
module.exports.addProject = (req, res) => {
    const newProject = req.body
    Project.create(newProject)
        .then(proj => res.json(proj))
        .catch(err => {
            res.status(400).json(err)
        })
}

// update
module.exports.updateProject = (req, res) => {
    const paramsId = req.params.id
    const updatedProject = req.body
    Project.findOneAndUpdate(
        {_id : paramsId}, //criteria
        updatedProject, //updated info
        {new: true, runValidators: true}//options of how to show data
        //new : true --> return the updated object
        //runValidation --> to run validations
    )
        .then(updatedProject => res.json(updatedProject))
        .catch(err => res.json(err))
}

// delete
module.exports.delProject = (req, res) => {
    const paramsId = req.params.id
    Project.findOneAndDelete({_id : paramsId})
        .then(deletedProject => res.json(deletedProject))
        .catch(err => res.status(400).json(err))
}