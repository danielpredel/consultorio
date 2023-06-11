const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const misRutas = require("./routes/rutas");

const port = process.env.PORT || 3000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', misRutas); 
app.listen(port, () => {
  console.log(`hola servidor ejecucion en http://localhost:${port}`);
});


