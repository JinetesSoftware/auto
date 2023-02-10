require("dotenv").config();
const express = require("express");
const myParser =require("body-parser")

const dbConnect = require("./config/mongo");
const loggerStream = require("./utils/handleLogger");

const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(express.static("public"));

/**
 * Server config
 **/
app.use(cors());
app.use(myParser.json({ limit: '256mb' }));
app.use(myParser.urlencoded({ limit: '256mb', extended: true }));
app.use(myParser.text({ limit: '256mb' }));


/**
 * Morgan
 **/
const morgan = require("morgan-body");
morgan(app, {
  noColors: true,
  stream: loggerStream,
  skip: (req, res) => res.statusCode < 400,
});

/**
 * Utils
 **/
const HTTPSTATUSCODE = require("./utils/handleStatusCode");

/**
 * Hello World
 **/
app.get("/", (req, res) => {
  res.send("Hola mundo! ;)");
});

/**
 * Router
 **/
const base = "/api";
app.use(base, require("./routes"));

/**
 * Errors
 **/
app.use((req, res, next) => {
  let err = new Error();
  err.status = 404;
  err.message = HTTPSTATUSCODE[404];
  next(err);
});

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || "Unexpected error");
});

/**
 * Server listen
 **/
app.listen(port || 3000, () => {
  console.log(`Server running at http://localhost:${port}`);
});
dbConnect();
