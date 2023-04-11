var express = require('express');
var router = express.Router();
var db=require('../models');


router.post('/add',(req,res)=>{
  db.Annonces.create(req.body).then(
    (r)=>{
      res.send(r)
    }
  ).catch((e)=>{res.send(e)})
});

router.get('/fetch', function(req, res, next) {
  db.Annonces.findAll().then((resp)=>{
    res.send(resp)
  })
});
router.delete('/remove/:id',(req,res)=>{
  db.Annonces.destroy({where:{id:req.params.id}}).then(
    ()=>{
      res.send('removed')
    }
  )
  });

  router.get('/detail/:id', function(req, res, next) {
    db.Annonces.findOne({where:{id:req.params.id}}).then((resp)=>{
      res.send(resp)
    })
  });


module.exports = router;