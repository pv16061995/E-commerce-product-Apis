const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/product_with_mongo',(err)=>{
	if(!err)
		console.log('Connect with db successfully.');
});


module.exports=mongoose;