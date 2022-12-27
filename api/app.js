require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan-body");
const dbConnect = require("./config/mongo");
const loggerStream = require("./utils/handleLogger");
const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json()); //Necesario para recibir datos
app.use(express.static("storage"));
app.use(express.static('public'));

/*
 *Morgan
 */
morgan(app, {
  noColors: true,
  stream: loggerStream,
  skip: (req, res) => res.statusCode < 400,
});

/**
 * Hello World
 **/
app.get('/', (req, res) => {
  res.send('Hola mundo! ;)');
});

/**
 * Router
 **/
const base = "/api";
app.use(base, require("./routes"));

app.listen(port || 3000, () => {
  console.log(`Server running at http://localhost:${port}`);
});
dbConnect();