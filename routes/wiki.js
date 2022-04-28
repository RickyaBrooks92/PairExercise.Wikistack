const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");
const { Page } = require("../models");

router.get("/", (req, res) => {
  res.send("wiki pages");
});

router.post("/", async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
    });

    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/add", (req, res) => {
  res.send(addPage());
});

router.get("/:slug", async (req, res, next) => {
  const notSlug = req.params.slug;
  const whatAreYou = await Page.findAll({
    where: {
      slug: notSlug,
    },
  });
  console.log(whatAreYou);
  res.send(`hit dynamic route at ${req.params.slug}`);
});

module.exports = router;
