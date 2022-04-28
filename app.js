const express = require("express");
const morgan = require("morgan");
const main = require("./views/main");
const { db } = require("./models");

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/users", require("./routes/users"));
app.use("/wiki", require("./routes/wiki"));

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

(async () => {
  await db.sync({ force: true });
})();

app.listen("8080", () => {
  console.log("app listeningg in port 8080");
});
