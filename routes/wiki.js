const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const {Page} = require('../models');

router.get('/', (req, res,) => {
  res.send('wiki pages');
});

router.post('/', async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content
    })
    console.log(page);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.get('/add', (req, res) => {
  res.send(addPage());
});

module.exports = router;

