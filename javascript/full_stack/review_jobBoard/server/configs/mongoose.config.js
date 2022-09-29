const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/jobs_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Extablished a connnection to the database'))
    .catch(() => console.log('Something went wrong'));