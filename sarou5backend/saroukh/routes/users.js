var express = require('express');
var router = express.Router();
var db=require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add',(req,res)=>{
  db.Users.create(req.body).then(
    (r)=>{
      res.send(r)
    }
  ).catch((e)=>{res.send(e)})
});

router.get('/fetch', function(req, res, next) {
  db.Users.findAll().then((resp)=>{
    res.send(resp)
  })
});


module.exports = router;
