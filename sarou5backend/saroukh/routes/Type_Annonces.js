var express = require('express');
var router = express.Router();


var db=require('../models');

router.get('/fetch', function(req, res, next) {
    db.Type_Annonces.findAll().then((resp)=>{
      res.send(resp)
    })
  });

  module.exports = router;