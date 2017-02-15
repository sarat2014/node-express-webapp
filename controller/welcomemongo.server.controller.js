var Welcome = require('../models/welcomemongo.server.model');

exports.list = function(req,res){
    
    var query = Welcome.find();
    
    query.sort({createdOn:'desc'})
         .limit(12)
         .exec(function(err,results){
          
          res.render('index', {title:'Notes list:', notes:results});
          
          });
}

exports.create = function(req,res){
    
    
  var entry = new Welcome ({
    memberName:req.body.memberName,
    project:req.body.project,
    workYesterday:req.body.workYesterday,
    workToday:req.body.workToday,
    impediment:req.body.impediment,
  });  
    
    entry.save(function(err){
      if(err){
           console.log(err);
           return;
      }

      res.redirect('/index');
    });
    
    
};

exports.getNote = function(req,res){
    res.render('newnote',{title:'Welcomemongo-new note'});
}