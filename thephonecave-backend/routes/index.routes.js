const express = require('express');
const router = express.Router();
const data = require("../data/phones.json");

/* GET home page */
router.get("/", (req, res, next) => {
  res.status(200).json("HomePage");;
});


/*GET phones route*/
router.get("/phones", (req, res, next) => {
  res.status(200).json(data);
});

// GET a phone by id
router.get("/phones/:id", (req, res, next) => {
  const phoneId = req.params.id;
  const phone = data.find(phone => phone.id === Number(phoneId));
  if (!phone) {
    res.status(404).send("Phone not found");
  } else {
    res.status(200).json(phone);
  }
});

module.exports = router;
