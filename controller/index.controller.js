const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  return res.render('index.view.html');
});

module.exports = router;
