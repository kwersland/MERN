const express = require("express");
const app = express()
const port= 8000;

require("./configs/mongoose.config")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/destination.routes")(app)

app.listen(port, () => console.log(`Listening on port: ${port}`));