const mongoose=require('mongoose');
 
const productSchema = new mongoose.Schema({

productId : {
  type: String,
  default: Date.now(),
  required: true
},

productName: {
    type: String,
    required: true,
  },

productDescription: {
    type: String,
    required: true
  },

  productCatagory: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

productImg: {
    type: String,
  },

},

{timestamps:true}
);


const productModel=mongoose.model('productSchema',productSchema);

module.exports=productModel;