const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
  console.log("all good with the back end");
});

module.exports = router;
