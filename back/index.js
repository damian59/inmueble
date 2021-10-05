const express = require('express');
const app = express();
const helmet = require("helmet");
const morgan = require("morgan")
const bodyParser = require('body-parser')
const cors = require("cors")
const db = require('./config/index')
const routes = require("./routes/index")
app.use(cors())
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(helmet());


app.use(express.static(__dirname + "/public"));


app.use("/api",routes)

db.sync({ force:false }).then(() => {
    console.log("concetada a la base de datos");
    app.listen(3001);
    console.log("Servidor escuchado en el puerto 3001");
});