const express = require("express");
const morgan = require("morgan");
const main = require("./views/main");
const { db, User, Page } = require("./models");

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(main());
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

(async () => {
  await db.sync();
})();

app.listen("8080", () => {
  console.log("app listening in port 8080");
});
