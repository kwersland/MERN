const {Job} = require('../models/job.model')

module.exports.index = (req, res) => {
    res.json({message: "Hello"})
}
module.exports.testApi = (req, res) => {
    res.json({status: ok, message:'message from backend'})
}

// Get all
module.exports.getAll = (req, res) => {
    Job.find()
        .then(allJobs => res.json(allJobs))
        .catch(err => res.status(400).res.json(err))
}

// Get one
module.exports.getOne = (req, res) => {
    const paramsId = req.params.id
    Job.findOne({_id : paramsId})
        .then(dest => res.json(dest))
        .catch(err => res.status(400).json(err))
}

// create
module.exports.addJob = (req, res) => {
    const newJob = req.body
    Job.create(newJob)
        .then(job => res.json(job))
        .catch(err => res.status(400).json(err))
}

// update
module.exports.updateJob = (req, res) => {
    const paramsId = req.params.id
    const updatedJob = req.body
    Job.findOneAndUpdate(
        {_id : paramsId}, //criteria
        updatedJob, //updated info
        {new: true, runValidators: true}//options of how to show data
        //new : true --> return the updated object
        //runValidation --> to run validations
    )
        .then(updatedJob => res.json(updatedJob))
        .catch(err => res.json(err))
}

// delete
module.exports.delJob = (req, res) => {
    const paramsId = req.params.id
    Job.findOneAndDelete({_id : paramsId})
        .then(deletedJob => res.json(deletedJob))
        // .catch(err => res.status(400).res.json(err))
}