//Import dependencies
const express = require("express")


//app object
const app = express()

// Route
app.get("/", (req, res) => {
    res.send("Howdy Partners")
})

//listener
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))