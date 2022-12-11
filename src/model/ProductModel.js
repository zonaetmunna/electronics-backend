// external imports
const mongoose = require('mongoose');
const { Schema } = mongoose;


/* processor: String,
  motherboard: String,
	ram: String,
	graphics: String,
	storage: String,
	casing: String,
	psu: String,
	cooler: String, */

const ProductSchema = new Schema({

	model: {
		type: String,
		required: true,
		trim: true,
	},
	
	image: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true
	},
	keyFeature: {
		type: Array
	},
	price
		: {
		type: Number,
		required: true,
	},
	rating: {
		type: Number

	},
	spec: Array,
	
}, { timestamp: true }
);

console.log(ProductSchema);

module.exports = mongoose.model('Product', ProductSchema);