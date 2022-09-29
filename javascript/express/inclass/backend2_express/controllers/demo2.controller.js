
// temp data base
const users = [
    {firstName: "karsten", lastName: "wersland"},
    {firstName: "karsten", lastName: "wersland"},
    {firstName: "karsten", lastName: "wersland"},
    {firstName: "karsten", lastName: "wersland"},
    {firstName: "karsten", lastName: "wersland"}
]

module.exports = {
    testing : (req, res) => {
        res.json({message: "Hello World"})
    },
    allUsers : (req, res) => {
        res.json(users)
    },
    oneUser : (req, res) => {
        const userId = req.params.id
        res.json(users[userId])
    },
    createUser : (req, res) => {
        const newUser = req.body
        users.push(newUser)
        res.json(newUser)
    },
    updateUser : (req, res) => {
        const userId = req.params.id
        const updatedData = req.body
        users[userId] = updatedData
        res.json(users[userId])
    },
    deleteUser : (req, res) => {
        const userId = req.params.id
        users.splice(userId, 1)
        res.json({status: "ok"})
    }
}