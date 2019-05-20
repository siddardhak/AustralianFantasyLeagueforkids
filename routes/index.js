var express=require('express');
var router=express.Router();

// Get Home Page

router.get('/',function(req,res){
    res.render('index',{
        Title:'Welcome',
        styles:'index.css',
    });
});

module.exports=router;