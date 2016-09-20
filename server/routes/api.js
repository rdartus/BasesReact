var express = require('express');
var router=express.Router();
var mongoose=require('mongoose');
var post =require('../models/post');


router.get('/posts',function(req,res,next){
  var code = req.query.code;
  console.log("request query :"+code);
  if (code!=undefined) {
    post.find({post_code:code} , function(err,data){
      if (err){
        res.send(err);
      }
        res.json(data);
    })
  }
})

//Rturn route
module.exports =router;
