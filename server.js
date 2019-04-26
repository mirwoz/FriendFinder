const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = process.env.port || 3001;

app.use(morgan('dev'))

app.use(express.static(__dirname + '/public'));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require("./routes/index")(app)
require("./routes/apiRoutes")(app)



app.listen(PORT, () => {
    console.log(`App is listening on PORT:${PORT} 🚀`)
})