const express = require('express');
const morgan = require('morgan');
const main = require("./views/main");

const app = express();

app.use(morgan('dev'));
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(main());
})

app.listen('8080', () => {
  console.log("app listening in port 8080")
});
