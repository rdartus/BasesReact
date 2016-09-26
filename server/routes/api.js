var express = require('express');
var router=express.Router();
var mongoose=require('mongoose');


//models
var post =require('../models/post');
var comment =require('../models/comment');


router.get('/posts',function(req,res,next){
  post.find({} , function(err,data){
      if (err){
        res.send(err);
      }
        res.json(data);
    })
  })

router.get('/post',function(req,res,next){
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


router.get('/comment',function(req,res,next){
  var code = req.query.code;
  console.log("Comment query :"+code);
  if (code!=undefined) {
    comment.find({post_code:code} , function(err,data){
      if (err){
        res.send(err);
      }
        res.json(data);
    })
  }
})
//Rturn route
module.exports =router;
