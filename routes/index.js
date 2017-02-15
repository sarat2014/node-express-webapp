var express = require('express');
var router = express.Router();
var welcomeCntrl = require('../controller/welcomemongo.server.controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  return welcomeCntrl.list(req,res);
});

router.get('/newnote',function(req,res){
   
    return welcomeCntrl.getNote(req,res);
    
});


router.post('/newnote',function(req,res){
  
    return welcomeCntrl.create(req,res);
    
});

module.exports = router;
