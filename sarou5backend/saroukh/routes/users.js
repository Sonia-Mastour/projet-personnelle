var express = require('express');
var router = express.Router();
var db=require('../models');


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
router.delete('/remove/:id',(req,res)=>{
  db.Users.destroy({where:{id:req.params.id}}).then(
    ()=>{
      res.send('removed')
    }
  )
  });

  router.get('/detail/:id', function(req, res, next) {
    db.Users.findOne({where:{id:req.params.id}}).then((resp)=>{
      res.send(resp)
    })
  });


  

module.exports = router;
