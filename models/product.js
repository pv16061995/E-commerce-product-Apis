const mongoose=require('mongoose');


var ProductSchema = new mongoose.Schema({
								 "name": String,
								 "description": String,
								 "assets": {
							        "imgs": [
							            {
							                "img": {
							                    "height": Number,
							                    "src": String,
							                    "width": Number
							                }
							            }
							        ]
							    },
							    "variants": [{
							    	"price":Number,
							    	"attrs": [
							            {
							            	"_id":String,
							                "dispType": String,
							                "value": String,
							            }
							        ],
							        "description":String
							    }],
							    "created_date": Date,
							    "last_updated" : Date
							    
							});


Product = mongoose.model('Product',ProductSchema);

module.exports={Product};