const express= require('express');
var router= express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Product }= require('../models/product');


router.get('/list',(req,res)=>{
	Product.find((err,docs)=>{
		if(!err)
		{
			response={"statuscode":200,"data":docs}
		}else{
			response={"statuscode":400,"data":err}
			console.log('Error in receive Product:'+json.stringfy(err,undefined,2));
		}
		res.send(response);		
	});
});

router.get('/list/:id',(req,res)=>{
	if(!ObjectId.isValid(req.params.id))
	return res.send({"statuscode":400,"data":"No record found!!!"});

	Product.findById(req.params.id,(err,docs)=>{
		if(!err)
		{
			response={"statuscode":200,"data":docs}
		}else{
			response={"statuscode":400,"data":err}
			console.log('Error in receive Product:'+json.stringfy(err,undefined,2));
		}
		res.send(response);		
	});
});



router.post('/save',(req,res)=>{

	var product = new Product(req.body);
	product.save((err,docs)=>{
		if(!err)
		{
			response={"statuscode":200,"data":docs._id}
		}else{
			response={"statuscode":400,"data":err}
			console.log('Error in receive Product:'+json.stringfy(err,undefined,2));
		}
		res.send(response);		
	});
});



module.exports = router;