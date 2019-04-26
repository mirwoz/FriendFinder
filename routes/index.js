const path = require("path");

module.exports = (app) => {
    app.get("/", (req, res) => {
        console.log(req.params)
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    app.get("/survey", (req, res) => {
        console.log(req.params)
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })

    app.get("/profile/:id", (req, res) => {
        console.log(req.params)
        res.send(`This is the profile for: ${req.params.id}`)
    });
}

